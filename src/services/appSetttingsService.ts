import { supabase } from "../lib/supabaseClient";
import type { Database } from "../types/database.types";

type AppSettingsRow = Database["public"]["Tables"]["app_settings"]["Row"];
type AppSettingsInsert = Database["public"]["Tables"]["app_settings"]["Insert"];
type AppSettingsUpdate = Database["public"]["Tables"]["app_settings"]["Update"];

type GetAllParams = Partial<{
  id: number;
  max_guests_per_booking: number;
  min_nights: number;
  max_nights: number;
  breakfast_price: number;
}>;

export const appSetttingsService = {
  async getAll(filters?: GetAllParams): Promise<AppSettingsRow[]> {
    let query = supabase.from("app_settings").select("*");

    if (filters?.id !== undefined) query = query.eq("id", filters.id);
    if (filters?.max_guests_per_booking !== undefined)
      query = query.eq("max_guests_per_booking", filters.max_guests_per_booking);
    if (filters?.min_nights !== undefined) query = query.eq("min_nights", filters.min_nights);
    if (filters?.max_nights !== undefined) query = query.eq("max_nights", filters.max_nights);
    if (filters?.breakfast_price !== undefined) query = query.eq("breakfast_price", filters.breakfast_price);

    const { data, error } = await query.order("id");

    if (error) throw new Error(error.message);

    return data;
  },

  async getById(id: number): Promise<AppSettingsRow> {
    const { data, error } = await supabase
      .from("app_settings")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw new Error(error.message);

    return data;
  },

  async create(payload: AppSettingsInsert): Promise<AppSettingsRow> {
    const { data, error } = await supabase
      .from("app_settings")
      .insert(payload)
      .select()
      .single();

    if (error) throw new Error(error.message);

    return data;
  },

  async update(id: number, payload: AppSettingsUpdate): Promise<AppSettingsRow> {
    const { data, error } = await supabase
      .from("app_settings")
      .update(payload)
      .eq("id", id)
      .select()
      .single();

    if (error) throw new Error(error.message);

    return data;
  },

  async delete(id: number): Promise<void> {
    const { error } = await supabase.from("app_settings").delete().eq("id", id);

    if (error) throw new Error(error.message);
  },
};

