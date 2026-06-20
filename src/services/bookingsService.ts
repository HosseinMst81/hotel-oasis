import { supabase } from "../lib/supabaseClient";
import type { BookingRow, BookingInsert, BookingUpdate } from "../types/database.types";

type GetAllParams = Partial<{
  guest_id: string;
  cabin_id: string;
  status: string;
  is_paid: boolean;
  has_breakfast: boolean;
}>;

export const bookingsService = {
  async getAll(filters?: GetAllParams): Promise<BookingRow[]> {
    let query = supabase.from("bookings").select("*");

    if (filters?.guest_id) query = query.eq("guest_id", filters.guest_id);
    if (filters?.cabin_id) query = query.eq("cabin_id", filters.cabin_id);
    if (filters?.status) query = query.eq("status", filters.status);

    if (typeof filters?.is_paid === "boolean") {
      query = query.eq("is_paid", filters.is_paid);
    }

    if (typeof filters?.has_breakfast === "boolean") {
      query = query.eq("has_breakfast", filters.has_breakfast);
    }

    const { data, error } = await query.order("created_at", { ascending: false });

    if (error) throw new Error(error.message);

    return data;
  },

  async getById(bookingId: string): Promise<BookingRow> {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .eq("booking_id", bookingId)
      .single();

    if (error) throw new Error(error.message);

    return data;
  },

  async create(payload: BookingInsert): Promise<BookingRow> {
    const { data, error } = await supabase
      .from("bookings")
      .insert(payload)
      .select()
      .single();

    if (error) throw new Error(error.message);

    return data;
  },

  async update(bookingId: string, payload: BookingUpdate): Promise<BookingRow> {
    const { data, error } = await supabase
      .from("bookings")
      .update(payload)
      .eq("booking_id", bookingId)
      .select()
      .single();

    if (error) throw new Error(error.message);

    return data;
  },

  async delete(bookingId: string): Promise<void> {
    const { error } = await supabase.from("bookings").delete().eq("booking_id", bookingId);

    if (error) throw new Error(error.message);
  },
};

