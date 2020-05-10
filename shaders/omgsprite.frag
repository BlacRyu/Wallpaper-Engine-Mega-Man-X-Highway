// Created by OMGParticles, 2020

// [COMBO] {"material":"Layers","combo":"LAYERCOUNT","default":1,"range":[1,10]}


varying vec2 v_TexCoord;

uniform float g_Alpha;
uniform sampler2D g_Texture0;
uniform vec2 g_Texture0Resolution;
uniform float g_Time;


uniform vec2 u_size; // {"default":"10 10","material":"Sprite Size"}
uniform vec2 u_sheetoffset0; // {"default":"0 0","material":"Offset 1"}

#if LAYERCOUNT > 1
	uniform vec2 u_sheetoffset1; // {"default":"0 0","material":"Offset 2"}
#endif

#if LAYERCOUNT > 2
	uniform vec2 u_sheetoffset2; // {"default":"0 0","material":"Offset 3"}
#endif

#if LAYERCOUNT > 3
	uniform vec2 u_sheetoffset3; // {"default":"0 0","material":"Offset 4"}
#endif

#if LAYERCOUNT > 4
	uniform vec2 u_sheetoffset4; // {"default":"0 0","material":"Offset 5"}
#endif

void main() {
	gl_FragColor = texSample2D(g_Texture0, (v_TexCoord * u_size + u_sheetoffset0) / g_Texture0Resolution);

	gl_FragColor.a *= g_Alpha;
}
