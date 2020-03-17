import React from 'react';
import Links from "./Links"

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
                        href="https://script.google.com/a/macros/rhschools.org/s/AKfycby7xxuXTEws_tfzdZ2Q61p67QUFy-ZNBN6uKQKKzgslWUiaFwfb-nqLOhjVO65mZdRz3w/exec">
                        Pro App
                    </a>
                    <a className="Links-choice"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/spreadsheets/d/1twnkq1S2zHvTrkP6g8NQ5inL3lANowkNt3U8YN50EWM/edit?usp=sharing">
                        Open Issues Sheet
                    </a>
                    <a className="Links-choice"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/spreadsheets/d/1KVjCGJM2Y0RGz1gRDBqImSsOlWNHg-PXvxVxb75I4_I/copy">
                        Completed Issues Sheet
                    </a>
                    <a className="Links-choice"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfdgVdmaZgQ02UP5HncFARZ5OUx6CJTcErnaEIt9BfCVp5MSA/viewform">
                        Tech Tickets Form
                    </a>
                    <a className="Links-choice"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://script.google.com/a/macros/rhschools.org/s/AKfycbwG6xFGTf-oOg-DOVLX_sqwwZVM96GskK9c8ncvT98JJMhQvKXVUkGF9Tn_Z44VKadG/exec">
                        Teacher Issue Tracker
                    </a>
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
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://rhmail-my.sharepoint.com/">
                            OneDrive
                        </a>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/drive/">
                            Google Drive
                        </a>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://calendar.google.com/calendar">
                            Google Calendar
                        </a>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.1to1plus.com/login">
                            One to One Plus
                        </a>       
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://launchpad.classlink.com/rockhill">
                            ClassLink / Launchpad
                        </a>       
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://destiny.rock-hill.k12.sc.us/">
                            Destiny
                        </a>         
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
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.rock-hill.k12.sc.us/Page/4929">
                            Timesheet
                        </a>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://drive.google.com/drive/folders/1wb9lmLK0wijYhR56mHWEZ_7AYtPfxx54?usp=sharing">
                            Travel Sheet
                        </a>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.rock-hill.k12.sc.us/cms/lib/SC01000464/Centricity/Domain/313/Request%20for%20Leave-Fillin.pdf">
                            Leave Form
                        </a>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.rock-hill.k12.sc.us/Page/4350">
                            Employee Self Serve
                        </a>       
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.rock-hill.k12.sc.us/Page/4453">
                            Personnel Forms
                        </a>       
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://boardpolicyonline.com/?b=york3_rock_hill">
                            District Policies
                        </a>         
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.rock-hill.k12.sc.us/Page/2">
                            District Calendar
                        </a>   
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
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://support.prometheanworld.com/product/-activdriver-/">
                            ActivDriver
                        </a>
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
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://sites.google.com/rhschools.org/ctpanelguide-tech/home">
                            Panel Guide
                        </a>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://sites.google.com/rhschools.org/tech-tickets-guide/home">
                            Tech Tickets - Tech Guide
                        </a>
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://sites.google.com/rhschools.org/tech-tickets-guide/home">
                            Tech Tickets - Teacher Guide
                        </a>
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
                        <a className="Links-choice"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://twitter.com/RHSD_Technology">
                            RHS Technology Twitter
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