import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import FollowGrid from './../user/FollowGrid'

const ProfileTabs = (props) => {
    const [tab, setTabs] = useState(0)

    const handleChangeTab = (event, value) => {
        setTabs(value)
    }
    return (
        <>
            <AppBar position='static' color='default'>
                <Tabs
                    value={tab}
                    onChange={handleChangeTab}
                    indicatorColor='primary'
                    textColor='primary'
                    variant='fullWidth'
                >
                    {/* <Tab label='Posts'/> */}
                    <Tab label='Following' />
                    <Tab label='Followers' />

                </Tabs>
            </AppBar>
            {/* {tab=== 0 && <TabContainer><PostList removeUpdate={ props.removePostUpdate}/></TabContainer>} */}
            {tab === 0 && <TabContainer><FollowGrid people={props.user.following} /></TabContainer>}
            {tab === 1 && <TabContainer><FollowGrid people={props.user.followers} /></TabContainer>}
        </>
    )
}

ProfileTabs.propTypes = {
    user: PropTypes.object.isRequired,
    //removePostUpdate: PropTypes.func.isRequired,
    // posts: PropTypes.array.isRequired
}

const TabContainer = (props) => {
    return (
        <Typography component="div" style={{ padding: 8 * 2 }}>
            {props.children}
        </Typography>
    )
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}

export default ProfileTabs
