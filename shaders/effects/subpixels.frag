
uniform sampler2D g_Texture0; // {"material":"framebuffer","label":"ui_editor_properties_framebuffer","hidden":true}

varying vec4 v_TexCoord;

void main() {
	vec4 albedo;
	albedo.ga = texSample2D(g_Texture0, v_TexCoord.ga).ga;
	albedo.r = texSample2D(g_Texture0, v_TexCoord.ra).r;
	albedo.b = texSample2D(g_Texture0, v_TexCoord.ba).b;
	gl_FragColor = albedo;
}
