import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";

type Inputs = {
  imageUpload: FileList;
};

interface Props {
  setImagePath: Dispatch<SetStateAction<string | undefined>>;
  setFormData: Dispatch<
    SetStateAction<string | globalThis.FormData | undefined>
  >;
}

interface FormData {
  userId: string;
  file: File;
  fileName: string;
}

function UploadImageField({ setImagePath, setFormData }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (fileInputData) => {
    const formData = new FormData();

    formData.append("userId", "1");
    formData.append("file", fileInputData.imageUpload[0]);
    formData.append("fileName", fileInputData.imageUpload[0].name);

    setFormData(formData);

    const fileName = formData.get("fileName");

    fetch("http://localhost:5001/files/1", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: formData, // body data type must match "Content-Type" header
    })
      .then((response) => {
        if (response.ok) {
          setImagePath(
            `${fileName!.toString().split(".")[0]}_black_and_white.${
              fileName!.toString().split(".")[1]
            }`
          );
        } else {
          setImagePath("Error: Cannot use image");
        }
      })
      .catch((error) => {
        setImagePath("Error: Cannot use image");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="imageUpload">Upload an image:</label>
        </div>
        <input type="file" {...register("imageUpload", { required: true })} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default UploadImageField;
