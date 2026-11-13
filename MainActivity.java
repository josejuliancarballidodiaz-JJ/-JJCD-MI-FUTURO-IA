package com.jjcd.mifuturoia;

import android.app.Activity;
import android.os.Bundle;
import android.graphics.Color;
import android.graphics.Typeface;
import android.view.Gravity;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.ScrollView;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends Activity {
    private final int bg = Color.rgb(13, 18, 36);
    private final int panel = Color.rgb(27, 35, 60);
    private final int accent = Color.rgb(139, 92, 246);

    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        getWindow().setStatusBarColor(bg);
        getWindow().setNavigationBarColor(bg);
        ScrollView scroll = new ScrollView(this);
        LinearLayout root = new LinearLayout(this);
        root.setOrientation(LinearLayout.VERTICAL);
        root.setPadding(dp(20), dp(28), dp(20), dp(28));
        root.setBackgroundColor(bg);
        scroll.addView(root);

        TextView brand = text("JJCD- MI FUTURO IA", 25, Color.WHITE, true);
        root.addView(brand);
        TextView subtitle = text("TU ESTUDIO CREATIVO CON INTELIGENCIA ARTIFICIAL", 11, 0xFFB9C2D9, false);
        subtitle.setPadding(0, dp(7), 0, dp(22));
        root.addView(subtitle);
        TextView welcome = text("¿Qué quieres crear hoy?", 21, Color.WHITE, true);
        root.addView(welcome);
        TextView note = text("Elige un estudio para comenzar. Esta primera versión es la base de la aplicación.", 14, 0xFFD0D7E8, false);
        note.setPadding(0, dp(8), 0, dp(18)); root.addView(note);

        addCard(root, "🎬  Estudio de vídeos IA", "Texto a vídeo · Imagen a vídeo · Animación · Transformación");
        addCard(root, "🖼  Estudio de imágenes IA", "Crear · Editar · Restaurar · Quitar fondos · Variaciones");
        addCard(root, "🎙  Voces y sonidos", "Narración · Voces · Música · Efectos · Doblaje");
        addCard(root, "✂  Editor audiovisual", "Fotos · Vídeos · Audio · Subtítulos · Transiciones");
        addCard(root, "📚  Fábrica de películas", "Guiones · Personajes · Escenas · Historias completas");
        addCard(root, "▶  Estudio YouTube", "Miniaturas · Títulos · Descripciones · Shorts");
        addCard(root, "🌐  Idiomas y ajustes", "Español predeterminado · Otros idiomas · Preferencias");

        TextView footer = text("Versión inicial 0.1.0  •  Proyecto en desarrollo", 12, 0xFF9AA6C2, false);
        footer.setGravity(Gravity.CENTER); footer.setPadding(0, dp(22), 0, 0); root.addView(footer);
        setContentView(scroll);
    }

    private void addCard(LinearLayout root, String title, String description) {
        LinearLayout card = new LinearLayout(this);
        card.setOrientation(LinearLayout.VERTICAL);
        card.setPadding(dp(16), dp(15), dp(16), dp(15));
        card.setBackgroundColor(panel);
        LinearLayout.LayoutParams lp = new LinearLayout.LayoutParams(-1, -2);
        lp.bottomMargin = dp(11); card.setLayoutParams(lp);
        TextView t = text(title, 17, Color.WHITE, true);
        TextView d = text(description, 12, 0xFFD0D7E8, false);
        d.setPadding(0, dp(7), 0, 0);
        card.addView(t); card.addView(d);
        card.setOnClickListener(v -> Toast.makeText(this, "Módulo preparado para integración: " + title, Toast.LENGTH_SHORT).show());
        root.addView(card);
    }
    private TextView text(String value, int size, int color, boolean bold) {
        TextView v = new TextView(this); v.setText(value); v.setTextSize(size); v.setTextColor(color);
        if (bold) v.setTypeface(Typeface.DEFAULT, Typeface.BOLD);
        return v;
    }
    private int dp(int value) { return (int)(value * getResources().getDisplayMetrics().density + 0.5f); }
}
