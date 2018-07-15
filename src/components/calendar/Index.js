import React from 'react';
import { Redirect } from 'react-router-dom';

const Index = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    return <Redirect to={`/month/${year}/${month}`} />;
};

export default Index;