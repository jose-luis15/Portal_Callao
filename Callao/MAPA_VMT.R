################################################
############### MAPA INTERACTIVO ###############
################################################
setwd("C:/Users/Jose Luis/Desktop/MAPA")
#CARGAMOS LAS LIBRERIAS NECESARIAS
library(maps)
library(leaflet)
library(sp)
library(sf)
library(readxl)
library(raster)

pal <- colorNumeric(
  palette = "YlGnBu",
  domain = distritos$DISTRITO
) 

#1. capa base
distritos <- shapefile("distritos_callao.shp")
colores <- c("#3850A0", "#2c7fb8",  "#41b6c4","#a1dab4","#ffffcc", "#fed98e",  "#EE9626")
Spp_Names <- distritos$DISTRITO%>%unique()

pal <- colorFactor(colores, domain = Spp_Names)

leaflet()%>%addTiles()%>%
  addPolygons(data = distritos,
              fillColor = ~pal(DISTRITO),
              fillOpacity = 0.7,
              weight = 2,
              opacity = 1,
              color = "Black",
              group = "Límite según la ley de creación", label =  ~as.character(DISTRITO), labelOptions = labelOptions(noHide = T, direction = 'top', textOnly = T))%>%
  addLegend(data = distritos, "bottomleft", pal = pal,
            values = ~DISTRITO, title = "Distritos",
            opacity = 1, group = "Leyenda")

package_version(R. version)
getRversion()
