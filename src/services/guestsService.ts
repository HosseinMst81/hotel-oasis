import { supabase } from "../lib/supabaseClient";
import type { GuestRow, GuestInsert, GuestUpdate } from "../types/database.types";

type GetAllParams = Partial<{
  full_name: string;
  email: string;
  country_code: string;
  nationality: string | null;
}>;

export const guestsService = {
  async getAll(filters?: GetAllParams): Promise<GuestRow[]> {
    let query = supabase.from("guests").select("*");

    if (filters?.full_name) query = query.ilike("full_name", `%${filters.full_name}%`);
    if (filters?.email) query = query.ilike("email", `%${filters.email}%`);
    if (filters?.country_code) query = query.eq("country_code", filters.country_code);

    if (filters?.nationality !== undefined) {
      query = filters.nationality === null ? query.is("nationality", null) : query.eq("nationality", filters.nationality);
    }

    const { data, error } = await query.order("full_name");

    if (error) throw new Error(error.message);

    return data;
  },

  async getById(guestId: string): Promise<GuestRow> {
    const { data, error } = await supabase
      .from("guests")
      .select("*")
      .eq("guest_id", guestId)
      .single();

    if (error) throw new Error(error.message);

    return data;
  },

  async create(payload: GuestInsert): Promise<GuestRow> {
    const { data, error } = await supabase
      .from("guests")
      .insert(payload)
      .select()
      .single();

    if (error) throw new Error(error.message);

    return data;
  },

  async update(guestId: string, payload: GuestUpdate): Promise<GuestRow> {
    const { data, error } = await supabase
      .from("guests")
      .update(payload)
      .eq("guest_id", guestId)
      .select()
      .single();

    if (error) throw new Error(error.message);

    return data;
  },

  async delete(guestId: string): Promise<void> {
    const { error } = await supabase.from("guests").delete().eq("guest_id", guestId);

    if (error) throw new Error(error.message);
  },
};

