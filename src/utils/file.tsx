import React from "react";

type Props = React.HTMLAttributes<HTMLLabelElement> & {
  labelContent: React.ReactNode;
  onChangeFiles: (file: Array<{ fileName: string; fileBinary: string }>) => void;
  multiple?: true;
};

const FileInput = ({ labelContent, onChangeFiles, multiple, style, ...rest }: Props) => {
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null || e.target.files.length === 0) return;

    const selectedFiles = Array.from(e.target.files);
    const files: { fileName: string; fileBinary: string }[] = [];

    const readAsDataURL = async (file: File) => {
      return new Promise<{ fileName: string; fileBinary: string }>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve({
            fileName: file.name,
            fileBinary: reader.result ? reader.result.toString() : "",
          });
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    };

    for (const f of selectedFiles) {
      const fileObj = await readAsDataURL(f);
      files.push(fileObj);
    }

    onChangeFiles(files);
  };

  return (
    <label style={{ ...style, cursor: "pointer" }} {...rest}>
      {labelContent}
      <input
        type="file"
        style={{ opacity: 0, width: 0 }}
        multiple={multiple}
        onClick={(e) => {
          e.currentTarget.value = "";
        }}
        onChange={onChange}
      />
    </label>
  );
};

export default FileInput;
