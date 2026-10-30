import React from 'react';
import Icon from '../components/Icon';
import { CTABand, FeatureCard, IconTile, PageHero, Reveal, SectionHeading, usePageTitle } from '../components/ui';
import { IMAGES } from '../data/images';
import { BRAND } from '../data/site';
import { NAME_MEANING, VALUES } from '../data/content';

const AboutPage = () => {
    usePageTitle('About');

    return (
        <>
            <PageHero eyebrow="About iBima" title="Claims people, building claims technology" crumbs={[{ label: 'About' }]} image={IMAGES.officeCollab}>
                iBima is built and operated by {BRAND.operator}, a claims-services and technology company working with
                insurers, brokers, surveyors and workshops since {BRAND.established}.
            </PageHero>

            <section className="container-x grid gap-8 section lg:grid-cols-2">
                <div>
                    <SectionHeading eyebrow="Our story" title="We started on the survey floor." />
                    <div className="space-y-4 leading-relaxed text-slate-700">
                        <p>
                            Before iBima was software, our team handled claims the traditional way — site visits, paper
                            forms, WhatsApp photos and spreadsheets. We saw the same problem on almost every file: the
                            claim was not slow because the decision was hard, but because the evidence arrived late,
                            incomplete or unverifiable.
                        </p>
                        <p>
                            So we built the tools we wanted: guided capture that cannot skip an angle, geo-tagged evidence
                            that stands up in an audit, AI that drafts the assessment, and a claim desk that shows
                            everything on one screen. Those tools became the iBima product family.
                        </p>
                        <p>
                            Because we still run claims for clients as a service provider, every product is tested on
                            live files by the people who use it every day.
                        </p>
                    </div>
                </div>
                <div className="grid gap-4 self-start sm:grid-cols-2">
                    <Reveal className="card card-hover group bg-gradient-to-br from-brand-600 to-logo-navy text-white sm:col-span-2">
                        <IconTile name="zap" />
                        <h3 className="mt-3 text-lg font-bold text-white">Mission</h3>
                        <p className="mt-2 text-sm leading-relaxed text-brand-100">
                            Make every insurance claim in India faster, fairer and fully traceable — for the insurer and
                            the policyholder alike.
                        </p>
                    </Reveal>
                    <Reveal delay={100} className="card card-hover group sm:col-span-2">
                        <IconTile name="globe" />
                        <h3 className="mt-3 text-lg font-bold">Vision</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-700">
                            One trusted platform on which every motor and non-motor claim is captured, assessed and
                            settled — whether an insurer runs it themselves or with us.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="bg-slate-50 section">
                <div className="container-x">
                    <SectionHeading center eyebrow="The name" title="i + Bima + Assist" />
                    <div className="grid gap-5 md:grid-cols-3">
                        {NAME_MEANING.map((n, i) => (
                            <Reveal key={n.part} delay={i * 90} className="card card-hover border-t-4 border-t-logo-orange text-center">
                                <p className="text-4xl font-extrabold text-logo-orange">{n.part}</p>
                                <p className="mt-2 font-bold text-ink">{n.meaning}</p>
                                <p className="mt-2 text-sm text-slate-700">{n.body}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container-x section">
                <SectionHeading eyebrow="Our values" title="What we hold ourselves to" />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {VALUES.map((v, i) => (
                        <FeatureCard key={v.title} title={v.title} body={v.body} icon={v.icon} delay={i * 70} />
                    ))}
                </div>
            </section>

            <CTABand title="Let's talk about your claims" />
        </>
    );
};

export default AboutPage;
