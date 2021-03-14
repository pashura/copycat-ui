import React, {useCallback, useState} from "react";
import { Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const FileChooser = ({uploadFiles}) => {
    const [fileName, setFileName] = useState("Upload File");

    const onChoose = useCallback(file => {
        const reader = new FileReader()
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => uploadFiles(reader.result)
        reader.readAsText(file)
    }, [uploadFiles])

    return (
        <>
            <Form.Group as={Row}>
                <Form.File
                    type="file"
                    className="custom-file-label"
                    id="inputGroupFile01"
                    label={fileName}
                    onChange={(e) => {
                        onChoose(e.target.files[0])
                        setFileName(e.target.files[0].name)
                    }}
                    custom
                />
            </Form.Group>
        </>
    );
}

FileChooser.propTypes = {
    uploadFiles: PropTypes.func.isRequired
}

export default FileChooser;
