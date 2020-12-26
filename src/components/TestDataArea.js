import React, {useState, Fragment} from 'react'
import {Card} from "react-bootstrap";
import Highlight, {defaultProps} from "prism-react-renderer";
import Editor from "react-simple-code-editor"

import theme from "prism-react-renderer/themes/nightOwl";

import PropTypes from "prop-types";

const styles = {
    root: {
        boxSizing: 'border-box',
        fontFamily: '"Dank Mono", "Fira Code", monospace',
        ...theme.plain
    }
}

const TestDataArea = ({fileObject, setFO}) => {


    const [code, setCode] = useState(fileObject);
    const onValueChange = code => {
        setCode(code)
        setFO(code)
    }

    const highlight = code => (
        <Highlight {...defaultProps} theme={theme} code={code} language="xml">
            {({className, style, tokens, getLineProps, getTokenProps}) => (
                <Fragment>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({line, key: i})}>
                            {line.map((token, key) => <span {...getTokenProps({token, key})} />)}
                        </div>
                    ))}
                </Fragment>
            )}
        </Highlight>
    )

    return (
        <div className="TestDataArea">
            <Card>
                <Card.Header as="h5">Test Data</Card.Header>
                <Card.Body>
                    <Editor
                        value={code}
                        onValueChange={onValueChange}
                        highlight={highlight}
                        padding={10}
                        style={styles.root}
                    />
                </Card.Body>

            </Card>
        </div>
    )
}

TestDataArea.propTypes = {
    fileObject: PropTypes.string.isRequired
}

export default TestDataArea;
