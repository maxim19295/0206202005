import React from "react";
import rq from "./Request.module.css";
export const Request = (props) =>(
    <div className={rq.request}>
        <div className={rq.header}>
            <div>
                {props.name}
            </div>
            <div>
                {props.date}
            </div>
        </div>
        <div className={rq.content}>
            {props.text}
        </div>
    </div>
)