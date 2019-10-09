import React from 'react'

export default function Heading(props) {
    return (
        <div className="l-cards__heading">
            <h4>{props.heading}</h4>

            {/* <div className="show-code" title="Display Code" onClick={this.toggleHidden.bind(this)}>
                {this.state.isHidden ? (
                    <a href="#code">
                        <div className="code-button">
                            &lt; Show Code &gt;
                        </div>
                    </a>
                ) : (
                    <a href="#stacked">
                        <div className="code-button">
                            &lt; Hide Code &gt;
                        </div>
                    </a>
                )}
            </div> */}
        </div>
    )
}
