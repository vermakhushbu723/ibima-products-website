import React from 'react';
import { Link } from 'react-router-dom';
import { CTABand, PageHero, ProductCard, ProductIcon, SectionHeading, StatusBadge, usePageTitle } from '../components/ui';
import { IMAGES } from '../data/images';
import { PRODUCTS } from '../data/products';

const ProductsPage = () => {
    usePageTitle('Products');

    return (
        <>
            <PageHero eyebrow="Products" title="The iBima product family" crumbs={[{ label: 'Products' }]} image={IMAGES.teamInspect}>
                Seven products, one platform. Each covers a stage of the insurance claim — use one on its own, or connect
                them all.
            </PageHero>

            <section className="container-x section">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {PRODUCTS.map((p, i) => (
                        <ProductCard key={p.slug} product={p} delay={(i % 3) * 80} />
                    ))}
                </div>
            </section>

            <section className="bg-slate-50 section">
                <div className="container-x">
                    <SectionHeading eyebrow="At a glance" title="Compare products" />
                    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                        <table className="w-full min-w-[46rem] text-left text-sm">
                            <thead className="bg-slate-50 text-xs tracking-wider text-slate-600 uppercase">
                                <tr>
                                    <th className="px-5 py-3 font-semibold">Product</th>
                                    <th className="px-5 py-3 font-semibold">What it does</th>
                                    <th className="px-5 py-3 font-semibold">Used by</th>
                                    <th className="px-5 py-3 font-semibold">Available on</th>
                                    <th className="px-5 py-3 font-semibold">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {PRODUCTS.map((p, i) => (
                                    <tr key={p.slug} className="align-top">
                                        <td className="px-5 py-4">
                                            <Link to={`/products/${p.slug}`} className="flex items-center gap-3 font-semibold text-ink hover:text-brand-600">
                                                <ProductIcon product={p} size="sm" />
                                                {p.name}
                                            </Link>
                                        </td>
                                        <td className="max-w-xs px-5 py-4 text-slate-700">{p.tagline}</td>
                                        <td className="px-5 py-4 text-slate-700">{p.audience.slice(0, 3).join(', ')}</td>
                                        <td className="px-5 py-4 text-slate-700">{p.platforms.join(', ')}</td>
                                        <td className="px-5 py-4">
                                            <StatusBadge status={p.status} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <CTABand title="Not sure where to start?" body="Most teams begin with Pre-Inspection or Motor survey and add Claim Desk and AI Assess next. We'll help you pick." />
        </>
    );
};

export default ProductsPage;
