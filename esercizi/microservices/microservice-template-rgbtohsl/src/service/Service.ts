import colorConverter from 'color-convert'

export const RgbToHsl = (color: any)=>{
    return colorConverter.rgb.hsl(color)
}
