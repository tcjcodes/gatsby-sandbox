import React from "react"
import g from "glamorous"
import Link from 'gatsby-link'
import {
    Card, CardContent, CardFooter, CardFooterItem, CardImage, Column, Columns, Container, Content, Heading, Image,
    Section,
    Title
} from 'bloomer';
import Dotdotdot from 'react-dotdotdot'

const prune = (str, len) => {
    if (str.length > len) {
        return `${str.substr(0, len).trim()}...`;
    }
    return str;
}

const MyCard = (props) => <Column isSize={{ widescreen: 3, desktop: 3, mobile: 'full', tablet: 4, }}>
    <Link to='#' >
        <Card>
            <CardImage>
                <g.Div style={{
                    height: '280px',
                    background: `#fff url('https://via.placeholder.com/${props.dimensions}') no-repeat center center`,
                    backgroundSize: 'cover',

                }}>
                </g.Div>
            </CardImage>
            <CardContent>
                <div style={{ height: '150px', }}>
                    <Title isSize={4} style={{ marginBottom: '0.5rem', }}>
                        <Dotdotdot clamp={2}>
                            {props.title}
                        </Dotdotdot>
                    </Title>
                    <Dotdotdot clamp={3}>
                        <p>
                            People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But yfulfyulow, Yeah,
                            I’m
                            Thinking I’m
                            Back. Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m
                            Back.
                        </p>
                    </Dotdotdot>
                    <a href="#">
                        <small>Read More</small>
                    </a>
                </div>
            </CardContent>
            {/*<CardFooter hasTextAlign='right'>
        <CardFooterItem href='#'>
            <small>Read More</small>
        </CardFooterItem>
    </CardFooter>*/}
        </Card></Link>
</Column>

const Sandbox = (props) => <div>
    <Section>
        <Container css={{ maxWidth: '1200px', }}>
            <Heading>Food &amp; Drink</Heading>
            <Columns isMultiline={true}>
                <MyCard title='Organic Banana Milkshake' dimensions='300x300'/>
                <MyCard title='Paleo Cooking for Three: Its a Party!' dimensions='640x480'/>
                <MyCard title='Lorem Ipsum Dolores' dimensions='400x320'/>
                <MyCard title='Bacon Cheddar Cheesecake' dimensions='500x500'/>
            </Columns>

            <Heading>Holiday 2018</Heading>
            <Columns isMultiline={true}>
                <MyCard title='Globe' dimensions='300x300'/>
                <MyCard title='Gatsby Dry-Age New York Steak Sandwich with Grilled Onions' dimensions='500x500'/>
                <MyCard title='Espresso Coffee Latte' dimensions='600x480'/>
                <MyCard title='Brie Baked Pastry Baking Dish in a Set for 8' dimensions='320x240'/>
            </Columns>
        </Container>
    </Section>
</div>

export default Sandbox;