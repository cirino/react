import React, { Component } from 'react';
import categorias from './modulos/Data/cat'
import { CardStack, Card } from 'react-cardstack';

class Child extends Component {
    render() {
        return (
            <CardStack
                height={500}
                width={400}
                background='#f8f8f8'
                hoverOffset={25}>

                {
                    categorias.filter((item) => item.classificacao <= 4 ).map((item, index) =>
                        <Card
                            key={index}
                            background={item.background}>
                            <TeamMemberCard {...item} filho={this.props.filho} />
                        </Card>
                    )
                }

            </CardStack>
        )

    }
}

class ProfilePicture extends Component {
    render() {
        return (
            <img
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '100%',
                    border: `3px solid ${this.props.borderColor}`,
                }}
                src={this.props.imgSrc}
                alt=""
            />
        )
    }
}

class DetailsRow extends Component {
    render() {
        const renderSummary = () => {
            if (this.props.summary)
            	return (
                    <p style={{ fontWeight: 300, lineHeight: 1.45 }}>
                        {this.props.summary}
                    </p>
                );
            return null;
        };
        return (
            <div style={styles.detailsRow.row}>
			    <span className={`icon ${this.props.icon}`} style={{ ...styles.detailsRow.icon, alignSelf: 'flex-start' }}/>
                <div style={{ width: '80%' }}>
                    <h2 style={styles.detailsRow.title}>
                        {this.props.title}
                    </h2>
                    {renderSummary()}
                </div>
            </div>
        )
    }
}

class TeamMemberCard extends Component {
    render() {
        return (
            <div style={{ position: 'absolute', top: 0 }} onClick={this.props.onClick}>
                <header style={styles.cardHeader} className='card-header-details'>
                    <ProfilePicture imgSrc={this.props.imgSrc} borderColor={this.props.imgBorderColor} />
                    <div>
                        <h1 style={styles.headerName}>{this.props.name}</h1>
                        <h3 style={styles.headerTitle} className='icon ion-ios-arrow-down'>{this.props.title}</h3>
                    </div>
                </header>

                <div style={{color: '#fff'}}>
                    <DetailsRow
                        icon='ion-ios-telephone-outline'
                        title={this.props.mobileNo}
                    />

                    <DetailsRow
                        icon='ion-ios-location-outline'
                        title={this.props.location}
                    />

                    <DetailsRow
                        icon='icon ion-ios-paper-outline'
                        title='Main Role'
                        summary={this.props.role}
                    />

                    <a href="#" onClick={this.props.filho}>
                        {this.props.classificacao} - {this.props.categoria}
                    </a>
                </div>
            </div>
        )
    }
} 

const styles = {
	cardHeader: {
		display: 'flex',
		height: '125px',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px 20px',
		color: '#fff',
	},
	headerName: {
		margin: 0,
		fontWeight: 500,
		fontSize: '25px',
		textAlign: 'right'
	},
	headerTitle: {
		margin: '4px 0 0',
		fontWeight: 300,
		fontSize: '17px',
		opacity: 0.8,
		textAlign: 'right'
	},
	detailsRow: {
		row: {
			width: '100%',
			padding: '0 20px',
			display: 'flex',
			alignItems: 'center',
			margin: '25px 0',
		},
		icon: {
			display: 'block',
			width: '25px',
			height: '30px',
			margin: '0 20px 0 0',
			borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
			textAlign: 'center',
			fontSize: '22px',
		},
		title: {
			fontWeight: 500,
			fontSize: '20px',
			margin: 0,
			fontStyle: 'italic',
		},
	},
};

export default Child;