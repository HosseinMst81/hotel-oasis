import { supabase } from "../lib/supabaseClient";
import type { Database } from "../types/database.types";


type BookingRow = Database['public']['Tables']['bookings']['Row'];
type BookingInsert = Database['public']['Tables']['bookings']['Insert'];
type BookingUpdate = Database['public']['Tables']['bookings']['Update'];

type GetAllParams = Partial<{
  guestId: string;
  cabinId: string;
  status: string;
  isPaid: boolean;
  hasBreakfast: boolean;
}>;

export const bookingsService = {
  async getAll(filters?: GetAllParams): Promise<BookingRow[]> {
    let query = supabase.from('bookings').select('*');

    if (filters?.guestId) {
      query = query.eq('guest_id', filters.guestId);
    }

    if (filters?.cabinId) {
      query = query.eq('cabin_id', filters.cabinId);
    }

    if (filters?.status) {
      query = query.eq('status', filters.status);
    }

    if (typeof filters?.isPaid === 'boolean') {
      query = query.eq('is_paid', filters.isPaid);
    }

    if (typeof filters?.hasBreakfast === 'boolean') {
      query = query.eq('has_breakfast', filters.hasBreakfast);
    }

    const { data, error } = await query.order('created_at', {
      ascending: false,
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  async getById(bookingId: string): Promise<BookingRow> {
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('booking_id', bookingId)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  async create(payload: BookingInsert): Promise<BookingRow> {
    const { data, error } = await supabase
      .from('bookings')
      .insert(payload)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  async update(
    bookingId: string,
    payload: BookingUpdate
  ): Promise<BookingRow> {
    const { data, error } = await supabase
      .from('bookings')
      .update(payload)
      .eq('booking_id', bookingId)
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },

  async delete(bookingId: string): Promise<void> {
    const { error } = await supabase
      .from('bookings')
      .delete()
      .eq('booking_id', bookingId);

    if (error) {
      throw new Error(error.message);
    }
  },
};

