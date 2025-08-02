import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-primary">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-5 gap-8">
                    {/* General */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 underline text-primary">General</h3>
                        <ul className="space-y-1 text-sm">
                            <li><a href="/a-to-z-listing" className="hover:underline text-primary">A to Z Listing</a></li>
                            <li><a href="/nme-ict-project" className="hover:underline text-primary">NME-ICT Project</a></li>
                            <li><a href="/nirf" className="hover:underline text-primary">NIRF</a></li>
                            <li><a href="/tender" className="hover:underline text-primary">Tender</a></li>
                            <li><a href="/holidays" className="hover:underline text-primary">Holidays</a></li>
                            <li><a href="/cec-e-content" className="hover:underline text-primary">CEC E-content</a></li>
                            <li><a href="/journals" className="hover:underline text-primary">Journals</a></li>
                            <li><a href="/anti-ragging" className="hover:underline text-primary">Anti Ragging</a></li>
                            <li><a href="/fee-structure" className="hover:underline text-primary">Fee Structure</a></li>
                            <li><a href="/pandit-madan-mohan-malviya" className="hover:underline text-primary">Pandit Madan Mohan Malviya</a></li>
                            <li><a href="/external-proxy" className="hover:underline text-primary">External Proxy</a></li>
                            <li><a href="/re-accreditation-report" className="hover:underline text-blue-800">Re-accreditation Report (RAR)</a></li>
                            <li><a href="/agriculture-extension" className="hover:underline text-blue-800">Agriculture Extension Services</a></li>
                            <li><a href="/consultancy-services" className="hover:underline text-blue-800">Consultancy Services</a></li>
                            <li><a href="/convocation" className="hover:underline text-blue-800">Convocation</a></li>
                        </ul>
                    </div>

                    {/* Reports, Guidelines and Publications */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 underline text-blue-700">Reports, Guidelines and Publications</h3>
                        <ul className="space-y-1 text-sm">
                            <li><a href="/donation" className="hover:underline text-blue-800">Donation</a></li>
                            <li><a href="/annual-reports" className="hover:underline text-blue-800">Annual Reports</a></li>
                            <li><a href="/policies" className="hover:underline text-blue-800">Policies</a></li>
                            <li><a href="/exe-council-agenda" className="hover:underline text-blue-800">Exe. Council's Agenda(s) and MoM(s)</a></li>
                            <li><a href="/ucc-fact-sheet" className="hover:underline text-blue-800">UCC Fact Sheet</a></li>
                            <li><a href="/press-publication" className="hover:underline text-blue-800">Press & Publication Division</a></li>
                            <li><a href="/rti-act" className="hover:underline text-blue-800">RTI Act</a></li>
                            <li><a href="/non-net-fellowship" className="hover:underline text-blue-800">Non-NET Fellowship Guidelines</a></li>
                            <li><a href="/internal-audit" className="hover:underline text-blue-800">Internal Audit Manual</a></li>
                            <li><a href="/intellectual-policy" className="hover:underline text-blue-800">Intellectual Policy Ordinances</a></li>
                            <li><a href="/project-guidelines-2018" className="hover:underline text-blue-800">Project Guidelines-2018</a></li>
                            <li><a href="/consultancy-guidelines-2024" className="hover:underline text-blue-800">Consultancy Guidelines - 2024</a></li>
                            <li><a href="/ariia-report" className="hover:underline text-blue-800">ARIIA Report</a></li>
                            <li><a href="/security-audit-report" className="hover:underline text-blue-800">Security Audit report</a></li>
                        </ul>
                    </div>

                    {/* Facilities */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 underline text-blue-700">Facilities</h3>
                        <ul className="space-y-1 text-sm">
                            <li><a href="/computer-centre" className="hover:underline text-blue-800">Computer Centre</a></li>
                            <li><a href="/central-library" className="hover:underline text-blue-800">Central Library</a></li>
                            <li><a href="/guest-house" className="hover:underline text-blue-800">Guest Gouse Complex</a></li>
                            <li><a href="/health-services" className="hover:underline text-blue-800">Health Services</a></li>
                            <li><a href="/cultural-facilities" className="hover:underline text-blue-800">Cultural Facilities</a></li>
                            <li><a href="/accommodation" className="hover:underline text-blue-800">Accommodation</a></li>
                            <li><a href="/central-amenities" className="hover:underline text-blue-800">Central Amenities</a></li>
                            <li><a href="/usic-level-ii" className="hover:underline text-blue-800">USIC Level II</a></li>
                            <li><a href="/university-sports-board" className="hover:underline text-blue-800">University Sports Board</a></li>
                            <li><a href="/maintenance-divisions" className="hover:underline text-blue-800">Maintenance Divisions</a></li>
                            <li><a href="/bhu-intranet" className="hover:underline text-blue-800">BHU Intranet</a></li>
                        </ul>
                    </div>

                    {/* Contact & Info and Other Sections */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-bold mb-4 underline text-blue-700">Contact & Info</h3>
                            <ul className="space-y-1 text-sm">
                                <li><a href="/information-public-relations" className="hover:underline text-blue-800">Information and Public Relation's Office</a></li>
                                <li><a href="/contact-information" className="hover:underline text-blue-800">Contact Information</a></li>
                                <li><a href="/about-varanasi" className="hover:underline text-blue-800">About Varanasi</a></li>
                                <li><a href="/how-to-reach" className="hover:underline text-blue-800">How to reach</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-3 underline text-blue-700">Prominent Cells and Sections</h3>
                            <ul className="space-y-1 text-sm">
                                <li><a href="/mhrd-innovation-cell" className="hover:underline text-blue-800">MHRD Innovation Cell</a></li>
                                <li><a href="/womens-grievance-cell" className="hover:underline text-blue-800">Women's Grievance Cell</a></li>
                                <li><a href="/internal-complaints-committee" className="hover:underline text-blue-800">Internal Complaints Committee</a></li>
                                <li><a href="/sc-st-obc-cell" className="hover:underline text-blue-800">SC/ST/OBC Cell</a></li>
                                <li><a href="/ipr-technology-transfer" className="hover:underline text-blue-800">IPR and Technology Transfer Cell</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Miscellaneous and Additional Sections */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-bold mb-4 underline text-blue-700">Miscellaneous</h3>
                            <ul className="space-y-1 text-sm">
                                <li><a href="/mahatmana-malviya-mission" className="hover:underline text-blue-800">Mahatmana Malviya Mission</a></li>
                                <li><a href="/students-strength-category" className="hover:underline text-blue-800">Students Strength Category Wise</a></li>
                                <li><a href="/vishwanath-temple" className="hover:underline text-blue-800">Vishwanath Temple</a></li>
                                <li><a href="/bharat-kala-bhawan" className="hover:underline text-blue-800">Bharat Kala Bhawan</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-3 underline text-blue-700">Amenities</h3>
                            <ul className="space-y-1 text-sm">
                                <li><a href="/placement-facilities" className="hover:underline text-blue-800">Placement Facilities</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-3 underline text-blue-700">Donations</h3>
                            <ul className="space-y-1 text-sm">
                                <li><a href="/contributors" className="hover:underline text-blue-800">Contributors</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-3 underline text-blue-700">Download Forms</h3>
                            <ul className="space-y-1 text-sm">
                                <li><a href="/download-refund-forms" className="hover:underline text-blue-800">Download Refund Forms</a></li>
                                <li><a href="/ioe-sricc-schemes" className="hover:underline text-blue-800">IoE-SRICC schemes & forms</a></li>
                                <li><a href="/dossier-form" className="hover:underline text-blue-800">Dossier Form</a></li>
                                <li><a href="/self-declaration-excel" className="hover:underline text-blue-800">Self Declaration Excel Utility</a></li>
                                <li><a href="/download-no-dues-forms" className="hover:underline text-blue-800">Download No-Dues forms</a></li>
                                <li><a href="/internal-forms" className="hover:underline text-blue-800">Internal Forms</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-secondary border-t border-yellow-600 py-4">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap items-center justify-between text-xs text-primary">
                        <div className="flex flex-wrap items-center space-x-4 mb-2 md:mb-0">
                            <a href="/copyright-policy" className="hover:underline">Copyright Policy</a>
                            <a href="/hyperlinking-policy" className="hover:underline">Hyperlinking Policy</a>
                            <a href="/terms-conditions" className="hover:underline">Terms & Conditions</a>
                            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                            <a href="/disclaimer" className="hover:underline">Disclaimer</a>
                            <a href="/help" className="hover:underline">Help</a>
                            <a href="/feedback-form" className="hover:underline">Feedback Form</a>
                            <a href="/sitemap" className="hover:underline">Sitemap</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span>Visitor No.</span>
                            <span className="bg-white text-black px-2 py-1 font-mono font-bold">38577772</span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start mt-3 text-xs text-blue-900">
                        <div className="mb-2 md:mb-0 max-w-3xl">
                            <p>This is the official Website of Banaras Hindu University, [BHU], Varanasi-221005, U.P., India. Content on this website is published and Managed by Banaras Hindu University. For any query regarding this website, Please contact the
                                <a href="/web-information-manager" className="text-primary hover:underline ml-1">"Web Information Manager"</a>
                            </p>
                        </div>
                        <div className="flex flex-col items-end text-right">
                            <div className="mb-1">
                                <span className="font-semibold">Last Updated on :</span>
                                <span className="ml-1">26-Jul-2025 17:06</span>
                            </div>
                            <div>
                                <span>Powered by :</span>
                                <a href="#" className="text-primary hover:underline ml-1">BSN Infotech Pvt. Ltd</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;