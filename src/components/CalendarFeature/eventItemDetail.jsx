import React from 'react'
import { format, parseISO} from 'date-fns'
import GoingButton from '../Events/GoingButton'
import ContactButton from '../Events/ContactButton'
import {Link } from 'react-router-dom'


// props = { event: [event object from redux store]}
const EventItemDetail = ({event}) => {
    const parsedDate = parseISO(event.start_time)
    const formattedTime = format(parsedDate, 'h:mmaa')
    const summaryEnd = 250
    const {accessibility} = event
    

    
    return (<div className="eventItemDetail"> 

                <Link to={`/events/${event.id}`}><h4 className="eventItemDetailTitle">{event.title} </h4></Link>
                <div className="eventItemDetailInfo"> 
                    <div className="eventGeneralInfo">
                        <h5>host: {event.host.name}</h5>
                        <p> location:{event.location}</p>
                        <p> starts @{formattedTime}</p>
                    </div>
                
                <div className="eventItemDetailAccessability"> 
                    <h3>Accessiblity </h3>
                    <p>{ {'no_water':"No water ~ BYO",
                                'water_for_sale':"Water for Sale",
                                'free_water':"Free water available"}[accessibility.water] }</p>
                    <p>bathrooms: {{'no_bathrooms':"No bathrooms",
                                'portos':"Porto-potties",
                                'single_stalls':"Single bathrooms",
                                'gendered_bathrooms': "Gendered bathrooms only",
                                'all_gender':"All Gender Bathrooms"}[accessibility.bathrooms]}</p>
                    <p>flashing Lights: {event.accessibility.flashing_lights ? "Yes": "none"}</p>
                    <p>Mobility: {{'inaccessible':"This space is not accessible",
                                'partially_accessible':"This space is partially accessible",
                                'wheelchair_accessible': "This space is wheelchair accessible"}[accessibility.mobility]}</p>
                </div>

                <div className="eventItemDetailBtns">
                    <GoingButton event={event} />
                    <ContactButton host={event.host} />
                </div>
                </div>

            <p> {event.description.length > summaryEnd ? `${event.description.substring(0,summaryEnd)}...`: event.description}</p>

    </div> )
}



export default EventItemDetail;