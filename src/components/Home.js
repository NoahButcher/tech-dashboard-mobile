import React from "react"

function Home(){

    return(
        <div className="App-body-area">
            <div className="Table-header">
                Home
            </div>
            <div className="Section">
                Announcements:
            </div>
            <div className="Section">
                Out Today:
            </div>
            <div className="Section">
                Slack Feed:
            </div>
            <div className="Section">
                Latest Technology Tweet:
            {/* <div className="twitter-viewport">
                    <a
                        className="twitter-timeline"
                        href="https://twitter.com/RHSD_Technology"
                        data-tweet-limit="1"
                        data-width="399" >
                        Embedded Tweet
                    </a>
                </div> */}
            </div>
        </div>
    )
}
export default Home