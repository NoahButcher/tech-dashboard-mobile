import React from 'react';

function LinksExtend(props){
    const category = props.extendCategory
    let output = ""
    switch (category) {
        case "Tech Tickets":
            output = (
                <div className="Links-holder">
                    <a className="Links-choice"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://script.google.com/a/macros/rhschools.org/s/AKfycbw2b3r3lQdLaH8GORI5I9esbqvt_OOGaguUrxLzBRKP35LJt5qojclbmXoJQIA2_ll9/exec#Main/">
                        Pro App
                    </a>
                    <br/>
                    <a className="Links-choice"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/spreadsheets/d/1twnkq1S2zHvTrkP6g8NQ5inL3lANowkNt3U8YN50EWM/edit?usp=sharing">
                        Open Issues Sheet
                    </a>
                    <br/>
                    <a className="Links-choice"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/spreadsheets/d/1KVjCGJM2Y0RGz1gRDBqImSsOlWNHg-PXvxVxb75I4_I/copy">
                        Completed Issues Sheet
                    </a>
                    <br/>
                    <a className="Links-choice"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfdgVdmaZgQ02UP5HncFARZ5OUx6CJTcErnaEIt9BfCVp5MSA/viewform">
                        Tech Tickets Form
                    </a>
                    <br/>
                    <a className="Links-choice"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://script.google.com/a/macros/rhschools.org/s/AKfycbwG6xFGTf-oOg-DOVLX_sqwwZVM96GskK9c8ncvT98JJMhQvKXVUkGF9Tn_Z44VKadG/exec">
                        Teacher Issue Tracker
                    </a>
                    <br/>
                    <a className="Links-choice"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/a/rhschools.org/forms/d/e/1FAIpQLScJYHomOvUmssdZXMrajOT_LLvyWfUSFv4lC81liIVgWS4Elg/viewform">
                        Report an error
                    </a>                    
                </div >
            )
            break;
            case "Logins":
                output = (
                    <div>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://outlook.office.com/owa/">
                            Email
                        </a>
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://rhmail-my.sharepoint.com/">
                            OneDrive
                        </a>
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/drive/">
                            Google Drive
                        </a>
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://calendar.google.com/calendar">
                            Google Calendar
                        </a>
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.1to1plus.com/login">
                            One to One Plus
                        </a>  
                        <br/>     
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://launchpad.classlink.com/rockhill">
                            ClassLink / Launchpad
                        </a>       
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://destiny.rock-hill.k12.sc.us/">
                            Destiny
                        </a>      
                        <br/>   
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://admin.google.com/">
                            Google Admin Console
                        </a>   
                    </div >
                )
                break;            
            case "District":
                output = (
                    <div>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.rock-hill.k12.sc.us/">
                            Rock Hill Schools Website
                        </a>
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.rock-hill.k12.sc.us/Page/4929">
                            Timesheet
                        </a>
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/drive/folders/1wb9lmLK0wijYhR56mHWEZ_7AYtPfxx54?usp=sharing">
                            Travel Sheet
                        </a>
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.rock-hill.k12.sc.us/cms/lib/SC01000464/Centricity/Domain/313/Request%20for%20Leave-Fillin.pdf">
                            Leave Form
                        </a>
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.rock-hill.k12.sc.us/Page/4350">
                            Employee Self Serve
                        </a>    
                        <br/>   
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.rock-hill.k12.sc.us/Page/4453">
                            Personnel Forms
                        </a>       
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://boardpolicyonline.com/?b=york3_rock_hill">
                            District Policies
                        </a>     
                        <br/>    
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.rock-hill.k12.sc.us/Page/2">
                            District Calendar
                        </a>   
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.rock-hill.k12.sc.us/Page/4366">
                            Email Password Reset
                        </a>  
                    </div >
                )
            break;  
            case "Technology":
                output = (
                    <div>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://sites.google.com/rhschools.org/ctpanelguide-tech/resources#h.p_-fB4JjPJhrCu">
                            Clear Touch Warranty Repair
                        </a>
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/drive/folders/1U-Kh4CcMqaL2LxADAf_gsXF17TRDqocm">
                            School Maps
                        </a>                          
                    </div >
                )
            break;  
            case "Software":
                output = (
                    <div>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.getcleartouch.com/downloads/">
                            Clear Touch Downloads
                        </a>
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://support.prometheanworld.com/product/-activdriver-/">
                            ActivDriver
                        </a>
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://support.prometheanworld.com/article/1030/">
                            Activeboard Firmware
                        </a>  
                    </div >
                )
            break;  
            case "Guides":
                output = (
                    <div>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://sites.google.com/rhschools.org/projector-guide/home">
                            Projector Guide
                        </a>
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://sites.google.com/rhschools.org/ctpanelguide-tech/home">
                            Panel Guide
                        </a>
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://sites.google.com/rhschools.org/tech-tickets-guide/home">
                            Tech Tickets - Tech Guide
                        </a>
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://sites.google.com/rhschools.org/tech-tickets-guide/home">
                            Tech Tickets - Teacher Guide
                        </a>
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/open?id=1BM8nY0F1jdLkrgUk-9NkFkC7KCPeJhAx">
                            One2One Guide (PDF)
                        </a>  
                    </div >
                )
            break;  
            case "Communication":
                output = (
                    <div>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://docs.google.com/spreadsheets/d/1PBN8k8QSfhtIrBBdz31QZFRv8fpQem8jhaePej9y_DU/edit#gid=0">
                            Tech Phone Directory
                        </a>
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://twitter.com/RHSD_Technology">
                            RHS Technology Twitter
                        </a>
                    </div >
                )
            break;  
            case "eLearning":
                output = (
                    <div>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/drive/folders/1S3lmAinQEMoZ34-gO9FrATou_PuwQ6VA?usp=sharing">
                            Technology Google Drive
                        </a>
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://docs.google.com/document/d/1LViOk0VXy66UTSuOBWG6SzPfrLDyh5j_VvUEX_3ex_8/copy">
                            eLearning Work Log
                        </a>
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/drive/folders/1yJrukDwh7ks0jtYrUwhtSClVsySrL9yi?usp=sharing">
                            Coronavirus / eLearning Folder
                        </a>
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/drive/folders/1ExI5nmBSxo9bAx5vwjGSQvfcmjjN-mB-?usp=sharing">
                            How-To (TECH) Folder
                        </a>
                        <br/>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/drive/folders/1moiMpQuUArOmroZ6xN3-vKLFP3sDXH5n?usp=sharing">
                            How-To (PUBLIC) Folder
                        </a>
                    </div >
                )
            break;
        default:
            break;
    }
    return(
        output
    )
}
export default LinksExtend