import supabase, { supabaseUrl } from "./supabase";

export const getCabins = async () => {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("Cabins couldnot be loaded");
  }
  return data;
};

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // 1.Create Cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert({ ...newCabin, image: imagePath });

  if (error) {
    console.log(error);
    throw new Error("Cabins couldnot be created");
  }
  // 2.Upload image

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Cabins couldnot be deleted");
  }
  return data;
}
