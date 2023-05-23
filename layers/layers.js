var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_pemerintahan_clipped_1 = new ol.format.GeoJSON();
var features_pemerintahan_clipped_1 = format_pemerintahan_clipped_1.readFeatures(json_pemerintahan_clipped_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemerintahan_clipped_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemerintahan_clipped_1.addFeatures(features_pemerintahan_clipped_1);
var lyr_pemerintahan_clipped_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemerintahan_clipped_1, 
                style: style_pemerintahan_clipped_1,
                interactive: true,
                title: '<img src="styles/legend/pemerintahan_clipped_1.png" /> pemerintahan_clipped'
            });
var format_administrasi_lebak_new_2 = new ol.format.GeoJSON();
var features_administrasi_lebak_new_2 = format_administrasi_lebak_new_2.readFeatures(json_administrasi_lebak_new_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_administrasi_lebak_new_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_administrasi_lebak_new_2.addFeatures(features_administrasi_lebak_new_2);
var lyr_administrasi_lebak_new_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_administrasi_lebak_new_2, 
                style: style_administrasi_lebak_new_2,
                interactive: true,
                title: '<img src="styles/legend/administrasi_lebak_new_2.png" /> administrasi_lebak_new'
            });
var format_bangunan_clipped_3 = new ol.format.GeoJSON();
var features_bangunan_clipped_3 = format_bangunan_clipped_3.readFeatures(json_bangunan_clipped_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bangunan_clipped_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bangunan_clipped_3.addFeatures(features_bangunan_clipped_3);
var lyr_bangunan_clipped_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bangunan_clipped_3, 
                style: style_bangunan_clipped_3,
                interactive: true,
                title: '<img src="styles/legend/bangunan_clipped_3.png" /> bangunan_clipped'
            });
var format_jalan_25k_clipped_new_4 = new ol.format.GeoJSON();
var features_jalan_25k_clipped_new_4 = format_jalan_25k_clipped_new_4.readFeatures(json_jalan_25k_clipped_new_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_25k_clipped_new_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_25k_clipped_new_4.addFeatures(features_jalan_25k_clipped_new_4);
var lyr_jalan_25k_clipped_new_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_25k_clipped_new_4, 
                style: style_jalan_25k_clipped_new_4,
                interactive: true,
    title: 'jalan_25k_clipped_new<br />\
    <img src="styles/legend/jalan_25k_clipped_new_4_0.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/jalan_25k_clipped_new_4_1.png" /> Jalan Lain<br />\
    <img src="styles/legend/jalan_25k_clipped_new_4_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/jalan_25k_clipped_new_4_3.png" /> <br />'
        });
var format_kesehatan_clipped_5 = new ol.format.GeoJSON();
var features_kesehatan_clipped_5 = format_kesehatan_clipped_5.readFeatures(json_kesehatan_clipped_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kesehatan_clipped_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kesehatan_clipped_5.addFeatures(features_kesehatan_clipped_5);
var lyr_kesehatan_clipped_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kesehatan_clipped_5, 
                style: style_kesehatan_clipped_5,
                interactive: true,
                title: '<img src="styles/legend/kesehatan_clipped_5.png" /> kesehatan_clipped'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_pemerintahan_clipped_1.setVisible(true);lyr_administrasi_lebak_new_2.setVisible(true);lyr_bangunan_clipped_3.setVisible(true);lyr_jalan_25k_clipped_new_4.setVisible(true);lyr_kesehatan_clipped_5.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_pemerintahan_clipped_1,lyr_administrasi_lebak_new_2,lyr_bangunan_clipped_3,lyr_jalan_25k_clipped_new_4,lyr_kesehatan_clipped_5];
lyr_pemerintahan_clipped_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_administrasi_lebak_new_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_bangunan_clipped_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_jalan_25k_clipped_new_4.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_kesehatan_clipped_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', });
lyr_pemerintahan_clipped_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FGSGOV': 'TextEdit', 'LUAS': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_administrasi_lebak_new_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_bangunan_clipped_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_jalan_25k_clipped_new_4.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_kesehatan_clipped_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'REMARK': 'TextEdit', 'TIPSHT': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FSKADD': 'TextEdit', });
lyr_pemerintahan_clipped_1.set('fieldLabels', {'NAMOBJ': 'no label', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_administrasi_lebak_new_2.set('fieldLabels', {'NAMOBJ': 'inline label', 'FCODE': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_bangunan_clipped_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_jalan_25k_clipped_new_4.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_LEN': 'no label', });
lyr_kesehatan_clipped_5.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'REMARK': 'no label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', });
lyr_kesehatan_clipped_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});