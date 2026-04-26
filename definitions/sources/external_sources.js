const sourcesCore = [    "stg_s_cust_hist_d_cust_90" 
,"stg_s_asspd_hist_d_leg_contr_90"
,"stg_s_um_asspd_hist_d_leg_contr_90"
,"stg_s_sub_hist_um_d_sub_90"
,"stg_s_sub_hist_kd_d_sub_90"
,"stg_s_order_item_hist_db_wod_90"
,"stg_s_work_order_hist_db_wrk_ord_90"
,"stg_vr_promo_db_promo_00"
,"stg_s_productcatalog_db_serv_offer_90"
,"stg_work_ord_fact_table_src_90"
];
// Generate declarations for all external sources
sourcesCore.forEach(source => declare({
    database: dataform.projectConfig.vars.sourceProject,
    schema: dataform.projectConfig.vars.sourceCoreDataset,
    name: source
}));
