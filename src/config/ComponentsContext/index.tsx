/**
 * Direct Components
 *
 * Copyright (c) DirectAI.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @version 0.1
 * @license MIT
 * @author Michał Chruścielski <michalch775@gmail.com>
 */

import "../../global.scss";
import React from "react";

type ComponentsContextProps = {
    darkMode?: boolean;
    children?: React.JSX.Element[] | React.JSX.Element | string;
};

/**
 * Context to manage components in library. It manages styles and will manage notifications and data flow in the future.
 * @version 0.1
 * @param {DContextProps} props
 * @param {boolean} props.darkMode dark mode switch
 * @param {React.JSX.Element[] | React.JSX.Element | string } [props.children] app content
 */
function ComponentsContext({ darkMode, children }: ComponentsContextProps) {
    return (
        <div
            className={`direct--context 
            ${darkMode !== undefined ? (darkMode ? "d--dark--mode" : "d--light--mode") : ""}`}
        >
            {children ? children : <></>}
        </div>
    );
}

export default ComponentsContext;
