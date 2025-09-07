import {
  createClient,
  type PostgrestSingleResponse,
} from "@supabase/supabase-js";
import Cookies from "universal-cookie";
import type { Database } from "../types/supabase";
export type Candidate = Database["public"]["Tables"]["candidates"]["Row"];
type CandidateInsert = Database["public"]["Tables"]["candidates"]["Insert"];
type CandidateUpdate = Database["public"]["Tables"]["candidates"]["Update"];

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? "";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY ?? "";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export const signUp = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: "maaz.genphics@gmail.com",
    password: "example-password",
  });
  if (error) {
    alert(error?.message);
    return;
  }
  return data;
};
export const signIn = async () => {
  const cookies = new Cookies();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "maaz.genphics@gmail.com",
    password: "example-password",
  });
  if (error) {
    alert(error?.message);
    return;
  }
  cookies.set("access_token", data?.session?.access_token);
  cookies.set("user", data?.user);
  return data;
};

export const createUser = async (
  payload: CandidateInsert,
): Promise<Candidate[] | undefined> => {
  if (
    payload?.created_at &&
    payload?.id &&
    payload?.email &&
    payload?.role &&
    payload?.phone &&
    payload?.name
  ) {
    const { data, error } = await supabase
      .from("candidates")
      .insert(payload)
      .select();
    if (error) {
      alert(error?.message);
      return;
    }
    if (data) {
      return data;
    }
  } else {
    return;
  }
};

export const updateUser = async (
  payload: CandidateUpdate,
  id: number,
): Promise<PostgrestSingleResponse<Candidate[]>> => {
  return await supabase
    .from("candidates")
    .update(payload)
    .eq("id", Number(id))
    .select();
};
export const deleteUser = async (id: number) => {
  return await supabase
    .from("candidates")
    .delete({ count: "exact" })
    .eq("id", Number(id));
};

export const getAllUsers = async (): Promise<
  PostgrestSingleResponse<Candidate[]>
> => {
  return await supabase.from("candidates").select(`id,name,email,phone,role`);
};
