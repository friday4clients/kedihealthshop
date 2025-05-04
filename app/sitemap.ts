import { getProductsByCategory } from '@/lib/actions';
import categories from '@/lib/categories';
import { ProductType } from '@/lib/utils';
import type { MetadataRoute } from 'next';


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const maps: MetadataRoute.Sitemap = [{
        url: process.env.NEXT_PUBLIC_HOSTNAME as string,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,

    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/contact`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },


    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Immune_&_General_Wellness`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Sexual_Health_&_Fertility`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Digestive_&_Liver_Health`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Diabetes_&_Blood_Sugar`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Eye_&_Brain_Health`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Malaria_&_Infection`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Bone_&_Joint_Support`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Skin_&_Beauty`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Diagnostic_&_Therapy_Equipment`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Agricultural_Product`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Immune_&_General_Wellness/Multi-Vitamin_(Zinc)?product_id=KPhUGYhGjrgI/9OV`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Immune_&_General_Wellness/Vitagent?product_id=iYl72VTme99HXMoR`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Immune_&_General_Wellness/Cordy_Royal_Jelly?product_id=2NGtHSjMOQtlF8XY`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Immune_&_General_Wellness/V-CA?product_id=DHmgzyAM6OdgTW`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Immune_&_General_Wellness/Cordy_Active?product_id=xIes1AslnaZyIax1`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Immune_&_General_Wellness/Reishi?product_id=jV7QIZGhOqxIc32c`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Immune_&_General_Wellness/Lycovite?product_id=yOeROXmZwGF80Nrv`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Immune_&_General_Wellness/Golden_Six?product_id=0dKoMxzIX1KEfLJk`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Immune_&_General_Wellness/Reishi?product_id=WgeJkZMaYve1WyK1`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Immune_&_General_Wellness/Cello_Q10_SG?product_id=EiEDHxXBjAr627EC`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Immune_&_General_Wellness/Ultramega?product_id=AYbC2Lod46ot1C/l`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Immune_&_General_Wellness/Memory_24_7?product_id=6zLThoEnTPP0hzJy`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Immune_&_General_Wellness/Calmazine?product_id=CVPdDq22AUKA8AQF`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Immune_&_General_Wellness/Cordy_Active_(Small)?product_id=xCCMrj0Cwt#95Xwn`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Immune_&_General_Wellness/Cordy_Royal_Jelly_(Small)?product_id=kaSYGjNiExsTmXYQ`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Sexual_Health_&_Fertility/Re-Vive_(Packet)?product_id=9hBTCAF02gkyUCsI`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Sexual_Health_&_Fertility/Re-Vive_(Mini_Packet)?product_id=67HNdc5UtI2VSoL0`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Sexual_Health_&_Fertility/M&V_Women?product_id=gFd9IHApJ4rVzidy`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Sexual_Health_&_Fertility/Gynapharm?product_id=ESNgqokCRlSQ7cjr`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Sexual_Health_&_Fertility/Lycovite?product_id=zuZQyMIbMCJHGy3`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Sexual_Health_&_Fertility/Re-Vive?product_id=loSHdSdThyCLsgvi`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Sexual_Health_&_Fertility/Vitaprego?product_id=f6x/BMmim1790c0z`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Sexual_Health_&_Fertility/Eve’s_Comfort?product_id=HIgggBUWNy8BFhKL`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Sexual_Health_&_Fertility/Vigor_Essential?product_id=leARWx0LjigBXKEa`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Digestive_&_Liver_Health/Golden_Hypha?product_id=FSJW6GfiOjKWRZL`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Digestive_&_Liver_Health/Golden_Hypha_(Small)?product_id=bG2A23ZGb6NEz3hR`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Digestive_&_Liver_Health/Colon_Cleanser?product_id=3BJJYjFWe5zv0sU4`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Digestive_&_Liver_Health/Gastrifort_(Small)?product_id=/p1QrRcErr9yGpr`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Digestive_&_Liver_Health/Magilim?product_id=ygpX8z4p9LJkCEXi`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Digestive_&_Liver_Health/Constilease?product_id=9bHqVQbtU1Vf4n0C`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Digestive_&_Liver_Health/Gastrifort?product_id=NzmaCAQ1nmt3lJZ`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Digestive_&_Liver_Health/Lirich?product_id=0KK9JxVB4dZtWCLK`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Diabetes_&_Blood_Sugar/Diawell_Tablet?product_id=pFxuJmwvGe4t5l9Z`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Diabetes_&_Blood_Sugar/Magilim?product_id=hK2FTpiaf1PiVSa`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Eye_&_Brain_Health/Memory_24_7?product_id=EfINhERvpQICoC`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Eye_&_Brain_Health/Eye_Beta?product_id=WQW35az7qYcnU3X0`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Malaria_&_Infection/Qinghao?product_id=Qk2zJyZkGY1CC84v`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Bone_&_Joint_Support/Jointeez_Pill?product_id=nL2aqn9K9K323mCY`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Skin_&_Beauty/Grapemin-e?product_id=oY1/MrqvhAoXmnay`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Diagnostic_&_Therapy_Equipment/Blood_Circulatory_Machine?product_id=jYwBvp4DUPfpAsdI`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Diagnostic_&_Therapy_Equipment/AE_Organism_Analyzer?product_id=MHmIrLZMvy39Dbdi`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Diagnostic_&_Therapy_Equipment/Quantum_Analyzer_(8th_Gen)?product_id=19GoUKtCbVNZL6bh`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Diagnostic_&_Therapy_Equipment/Quantum_Analyzer_(10th_Gen)?product_id=RbbVfIXVbOBZNx6H`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Diagnostic_&_Therapy_Equipment/Therapy_Stroke_Slimming?product_id=cJF/j0so6R7WRM4x`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Diagnostic_&_Therapy_Equipment/Digital_Therapy_Machine?product_id=HL28pIQTe66SIbdE`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Diagnostic_&_Therapy_Equipment/VIP_Chair_Massager?product_id=eAdIO89OIQYKc9D5`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Diagnostic_&_Therapy_Equipment/19D_NLS_Analyzer?product_id=0FyOZ6ss/rO1KCxY`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Diagnostic_&_Therapy_Equipment/Detoxifying_Machine?product_id=ydE7d2GJkXDSD9BT`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Diagnostic_&_Therapy_Equipment/Quantum_Therapy?product_id=B121b8J92lVYntHa`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    },
    {
        url: `${process.env.NEXT_PUBLIC_HOSTNAME}/Agricultural_Product/Growbett_Water_Soluble_Fertilizer?product_id=XGSqEZlNlH9vSrAA`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1
    }

    ];


    return maps;
}