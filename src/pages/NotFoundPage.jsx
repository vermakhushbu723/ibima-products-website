import React from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle } from '../components/ui';

const NotFoundPage = () => {
    usePageTitle('Page not found');
    return (
        <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
            <p className="text-6xl font-extrabold text-brand-600">404</p>
            <h1 className="mt-4 text-2xl font-bold">This page doesn't exist</h1>
            <p className="mt-2 text-slate-700">The link may be old, or the product may have moved.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/" className="btn-blue">Go home</Link>
                <Link to="/products" className="btn-outline">See all products</Link>
            </div>
        </section>
    );
};

export default NotFoundPage;
