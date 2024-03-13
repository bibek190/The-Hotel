import supabase from "./supabase";

export const getCabins = async () => {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("Cabins couldnot be loaded");
  }
  return data;
};