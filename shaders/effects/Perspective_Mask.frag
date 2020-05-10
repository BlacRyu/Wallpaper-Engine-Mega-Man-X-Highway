varying vec2 v_TexCoord;

uniform float g_Scale; // {"material":"scale","label":"Scale","default":1,"range":[-10,10]}

uniform sampler2D g_Texture0; // {"material":"framebuffer","label":"ui_editor_properties_framebuffer","hidden":true}
uniform sampler2D g_Texture1; // {"material":"Pixel Depth","mode":"opacitymask","default":"util/white"}

void main() {
	vec2 texCoord = v_TexCoord;

	float depth = texSample2D(g_Texture1, frac(texCoord)).r;
	// float sideDist = abs(texCoord.x - 0.5) * 0.5 + 1.0;

	texCoord.x -= 0.5;
	// texCoord.x /= (depth - 0.5) * g_Scale * sideDist + 1.0;
	texCoord.x /= (depth - 0.5) * g_Scale + 1.0;
	texCoord.x += 0.5;

	texCoord.x = frac(texCoord.x);

	gl_FragColor = texSample2D(g_Texture0, texCoord);
}
