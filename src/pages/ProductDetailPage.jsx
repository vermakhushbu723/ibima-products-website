import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Icon from '../components/Icon';
import { CTABand, CheckList, FeatureCard, ProductCard, ProductIcon, Reveal, SectionHeading, StatusBadge, usePageTitle } from '../components/ui';
import { PRODUCT_IMAGES } from '../data/images';
import { PRODUCTS, getProduct } from '../data/products';
import NotFoundPage from './NotFoundPage';

// One template for every product, in the order a surveyor's
// department page reads: overview -> scope -> capabilities ->
// workflow -> documents -> highlights.
const ProductDetailPage = () => {
    const { slug } = useParams();
    const p = getProduct(slug);
    usePageTitle(p?.name);
    if (!p) return <NotFoundPage />;

    const image = PRODUCT_IMAGES[p.slug];
    const related = PRODUCTS.filter((x) => x.slug !== p.slug).slice(0, 3);

    return (
        <>
            {/* Hero */}
            <section className="surface-deep relative overflow-hidden text-white">
                <div className="grid-lines absolute inset-0" aria-hidden="true" />
                <div className="container-x relative py-12 sm:py-14">
                    <nav className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-slate-300" aria-label="Breadcrumb">
                        <Link to="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link to="/products" className="hover:text-white">Products</Link>
                        <span>/</span>
                        <span className="font-medium text-white">{p.name}</span>
                    </nav>
                    <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
                        <div className="max-w-3xl">
                            <div className="mb-4"><ProductIcon product={p} size="lg" /></div>
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="text-xs font-bold tracking-[0.18em] text-logo-teal uppercase">{p.category}</span>
                                <StatusBadge status={p.status} />
                            </div>
                            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-[2.75rem]">{p.name}</h1>
                            <p className="mt-3 text-lg font-medium text-slate-200">{p.tagline}</p>
                            <p className="mt-3 leading-relaxed text-slate-200">{p.summary}</p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {p.platforms.map((pl) => (
                                    <span key={pl} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
                                        {pl}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-6 flex flex-wrap gap-2.5">
                                <Link to={`/contact?product=${p.slug}`} className="btn-primary">
                                    {p.status === 'Live' ? 'Request a demo' : 'Join early access'} <Icon name="arrow" size={14} />
                                </Link>
                                <a href="#workflow" className="btn-ghost">See how it works</a>
                            </div>
                        </div>
                        {image && (
                            <div className="relative">
                                <div className={`absolute -inset-3 rounded-3xl bg-gradient-to-br ${p.color} opacity-30 blur-2xl`} aria-hidden="true" />
                                <img src={image.src} alt={image.alt} fetchPriority="high" className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl ring-1 ring-white/10" />
                                <div className="absolute -bottom-4 left-4 flex animate-float items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-xl ring-1 ring-slate-200">
                                    <Icon name={p.capabilities[0].icon} size={24} />
                                    <span className="text-[13px] font-bold text-ink">{p.capabilities[0].title}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="container-x relative z-10 mt-8">
                <div className="grid gap-4 sm:grid-cols-3">
                    {p.highlights.map((h, i) => (
                        <Reveal key={h.label} delay={i * 90}>
                            <div className="card card-hover h-full border-l-4 border-l-brand-500">
                                <p className="text-2xl font-extrabold text-brand-700">{h.value}</p>
                                <p className="mt-0.5 text-sm text-slate-700">{h.label}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Overview + scope */}
            <section className="container-x grid gap-8 section lg:grid-cols-[1.3fr_1fr]">
                <div>
                    <p className="eyebrow mb-2">Overview</p>
                    <h2 className="text-2xl font-extrabold sm:text-[2rem]">What {p.name} does</h2>
                    {p.overview.map((para) => (
                        <p key={para.slice(0, 24)} className="mt-3 leading-relaxed text-slate-800">{para}</p>
                    ))}
                    <h3 className="mt-6 font-bold">Who uses it</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                        {p.audience.map((a) => (
                            <span key={a} className="rounded-md bg-brand-50 px-2.5 py-1 text-[13px] font-medium text-brand-700 ring-1 ring-brand-100">{a}</span>
                        ))}
                    </div>
                    {p.note && (
                        <p className="mt-6 rounded-lg border-l-4 border-logo-orange bg-orange-50 p-4 text-sm text-slate-700">{p.note}</p>
                    )}
                </div>
                <Reveal className="card self-start bg-slate-50">
                    <h3 className="flex items-center gap-2 font-bold">
                        <Icon name="list" size={24} /> Scope
                    </h3>
                    <CheckList items={p.scope} className="mt-4" />
                </Reveal>
            </section>

            {/* Capabilities */}
            <section className="bg-slate-50 section">
                <div className="container-x">
                    <SectionHeading eyebrow="Capabilities" title="Key features" />
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {p.capabilities.map((c, i) => (
                            <FeatureCard key={c.title} {...c} delay={(i % 3) * 80} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow + documents */}
            <section id="workflow" className="container-x grid scroll-mt-20 gap-8 section lg:grid-cols-[1.3fr_1fr]">
                <div>
                    <SectionHeading eyebrow="Workflow" title="How it works, step by step" />
                    <ol className="relative space-y-5 border-l-2 border-brand-100 pl-8">
                        {p.workflow.map((w, i) => (
                            <Reveal as="li" key={w} delay={i * 70} className="relative">
                                <span className="absolute -left-[2.85rem] grid h-8 w-8 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white ring-4 ring-white">
                                    {i + 1}
                                </span>
                                <p className="pt-1 font-medium text-ink">{w}</p>
                            </Reveal>
                        ))}
                    </ol>
                </div>
                <Reveal className="card self-start">
                    <h3 className="flex items-center gap-2 font-bold">
                        <Icon name="file" size={24} /> {p.slug === 'control' || p.slug === 'cloud' ? 'What we need to set you up' : 'Documents typically required'}
                    </h3>
                    <CheckList items={p.documents} className="mt-4" />
                </Reveal>
            </section>

            {/* Related */}
            <section className="bg-slate-50 section">
                <div className="container-x">
                    <SectionHeading eyebrow="Works with" title="Other iBima products" />
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {related.map((r, i) => (
                            <ProductCard key={r.slug} product={r} delay={i * 80} />
                        ))}
                    </div>
                </div>
            </section>

            <CTABand title={`Want to see ${p.name} live?`} />
        </>
    );
};

export default ProductDetailPage;
