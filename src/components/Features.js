import React from 'react'
import { Header, Button } from 'semantic-ui-react'
import AvailableFeatures from './AvailableFeatures'
import SelectedFeatures from './SelectedFeatures'

export default function Features() {
    return (
        <div className="features">
            <div className="app-button">
                <Button size='small'>App</Button>
            </div>
            <div className="features-container">
                <div className="features-header">
                    <Header as='h2'>Training: Essential Shortcuts
                    <Header.Subheader className="subheader">App: VS Code</Header.Subheader>
                    </Header>
                    <div className="features-table">
                        <AvailableFeatures />
                        <SelectedFeatures />
                    </div>
                </div>
            </div>
        </div>
    )
}