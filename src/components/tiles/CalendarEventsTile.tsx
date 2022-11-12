import { TileId } from "@/types";
import { Box, Flex } from "@chakra-ui/react";


type PageProps = {
    tileId: TileId;
  };


export const CalendarEventTile: React.FC<PageProps> = ({ tileId }) => {
    const color = `var(--text-color-${tileId})`;
    return (
        <Box p={1}>
                <EventCard title='df' desc='df' color={color}/>
        </Box>
    )
}


function EventCard({title, desc, color, ...rest}: {title: string, desc: string, color: string}){
    return (
        <Flex shadow='md' borderWidth={'1px'} {...rest}>
            <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%239E69AF&ctz=America%2FNew_York&showTitle=1&showNav=1&showTabs=0&showCalendars=1&showTz=1&mode=WEEK&title=Upcoming%20Events&src=Ym93bGluZy5zaGlwQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043" 
             width="800" height="600" frameBorder="0" scrolling="yes"></iframe>
        </Flex>
    )
}