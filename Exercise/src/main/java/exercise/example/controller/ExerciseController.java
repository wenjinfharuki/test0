package exercise.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import exercise.example.model.ExerciseEntity;
import exercise.example.model.ExerciseService;

@Controller
public class ExerciseController {

	@Autowired
	private ExerciseService exerciseService;

	// 新規登録画面を表示
	@GetMapping("/register")
	public String getRegisterPage() {
		return "admin_register_view.html";
	}

	// 登録内容を保存
	@PostMapping("/adminCreate")
	public String register(@RequestParam String adminName, @RequestParam String adminEmail, String password) {
		exerciseService.insert(adminName, adminEmail, password);
		return "redirect:/register";
	}

	// 一覧を表示
	@GetMapping("/adminAll")
	public String getAdminAll(Model model) {
		List<ExerciseEntity> adminlist = exerciseService.selectFindAll();
		model.addAttribute("adminlist", adminlist);
		return "admin_all_view.html";
	}

	// 編集画面へ遷移
	@GetMapping("/edit/{adminId}")
	public String getAdminEditPage(@PathVariable Long adminId, Model model) {
		ExerciseEntity exerciseEntity1 = exerciseService.selectByAdminId(adminId);
		model.addAttribute("admin", exerciseEntity1);
		return "admin_edit_view.html";
	}

	// 編集内容を更新
	@PostMapping("/update")
	public String updateAdmin(@RequestParam Long adminId, @RequestParam String adminName,
			@RequestParam String adminEmail, @RequestParam String password) {
		exerciseService.update(adminId, adminName, adminEmail, password);
		return "redirect:/adminAll";
	}

	// 内容を削除
	@PostMapping("/delete")
	public String deleteAdmin(@RequestParam Long adminId) {
		exerciseService.delete(adminId);
		return "redirect:/adminAll";
	}
}
