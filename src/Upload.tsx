import React from "react";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { UploadProps } from "antd/es/upload";
import { useAddFileMutation } from "./graphql/graphql";

const UploadFile = () => {
  const [uploadFile] = useAddFileMutation();
  const props: UploadProps = {
    name: "file",
    customRequest: async ({ file, onSuccess, onError, onProgress }) => {
      try {
        await uploadFile({
          variables: {
            picture: file,
          },
        });
        onSuccess({}, file);
      } catch (e) {
        onError(e);
      }
    },
    headers: {
      authorization: "authorization-text",
    },
  };
  return (
    <Upload {...props}>
      <Button>Upload File</Button>
    </Upload>
  );
};

export default UploadFile;
