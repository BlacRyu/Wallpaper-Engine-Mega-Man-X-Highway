
// [COMBO] {"material":"ui_editor_properties_repeat","combo":"CLAMP","type":"options","default":1}

varying vec2 v_TexCoord;

uniform sampler2D g_Texture0; // {"material":"framebuffer","label":"ui_editor_properties_framebuffer","hidden":true}

uniform vec4 g_Texture0Resolution;
uniform vec2 g_TexelSize;

void main() {
	vec2 texCoord = v_TexCoord;
#if CLAMP
	texCoord = frac(texCoord);
#endif
	texCoord = round(texCoord * g_Texture0Resolution.xy) * g_TexelSize + g_TexelSize * 0.5;
	gl_FragColor = texSample2D(g_Texture0, texCoord);
}
