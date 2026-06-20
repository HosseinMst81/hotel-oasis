import { supabase } from "../lib/supabaseClient";
import type { Database } from "../types/database.types";

type UsersRow = Database["public"]["Tables"]["users"]["Row"];
type UsersInsert = Database["public"]["Tables"]["users"]["Insert"];
type UsersUpdate = Database["public"]["Tables"]["users"]["Update"];

type GetAllParams = Partial<{
  email: string;
  name: string;
  role: string;
}>;

export const usersService = {
  async getAll(filters?: GetAllParams): Promise<UsersRow[]> {
    let query = supabase.from("users").select("*");

    if (filters?.email) query = query.ilike("email", `%${filters.email}%`);
    if (filters?.name) query = query.ilike("name", `%${filters.name}%`);
    if (filters?.role) query = query.eq("role", filters.role);

    const { data, error } = await query.order("created_at", { ascending: false });

    if (error) throw new Error(error.message);

    return data;
  },

  async getById(userId: string): Promise<UsersRow> {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (error) throw new Error(error.message);

    return data;
  },

  async create(payload: UsersInsert): Promise<UsersRow> {
    const { data, error } = await supabase
      .from("users")
      .insert(payload)
      .select()
      .single();

    if (error) throw new Error(error.message);

    return data;
  },

  async update(userId: string, payload: UsersUpdate): Promise<UsersRow> {
    const { data, error } = await supabase
      .from("users")
      .update(payload)
      .eq("user_id", userId)
      .select()
      .single();

    if (error) throw new Error(error.message);

    return data;
  },

  async delete(userId: string): Promise<void> {
    const { error } = await supabase.from("users").delete().eq("user_id", userId);

    if (error) throw new Error(error.message);
  },
};

