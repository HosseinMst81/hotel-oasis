import { supabase } from "../lib/supabaseClient";
import type { Database } from "../types/database.types";


type CabinRow = Database["public"]["Tables"]["cabins"]["Row"];
type CabinInsert = Database["public"]["Tables"]["cabins"]["Insert"];
type CabinUpdate = Database["public"]["Tables"]["cabins"]["Update"];

type GetAllParams = Partial<{
  name: string;
  capacity: number;
}>;

export const cabinsService = {
  async getAll(filters?: GetAllParams): Promise<CabinRow[]> {
    let query = supabase.from("cabins").select("*");

    if (filters?.name) {
      query = query.ilike("name", `%${filters.name}%`);
    }

    if (filters?.capacity) {
      query = query.eq("capacity", filters.capacity);
    }

    const { data, error } = await query.order("name");

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  async getById(cabinId: string): Promise<CabinRow> {
    const { data, error } = await supabase
      .from("cabins")
      .select("*")
      .eq("cabin_id", cabinId)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  async create(payload: CabinInsert): Promise<CabinRow> {
    const { data, error } = await supabase
      .from("cabins")
      .insert(payload)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  async update(cabinId: string, payload: CabinUpdate): Promise<CabinRow> {
    const { data, error } = await supabase
      .from("cabins")
      .update(payload)
      .eq("cabin_id", cabinId)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  async delete(cabinId: string): Promise<void> {
    const { error } = await supabase
      .from("cabins")
      .delete()
      .eq("cabin_id", cabinId);

    if (error) {
      throw new Error(error.message);
    }
  },
};
