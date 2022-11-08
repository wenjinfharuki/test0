package exercise.example.model;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExerciseService {

	@Autowired
	private ExerciseDao exerciseDao;

	// 一覧取得
	public List<ExerciseEntity> selectFindAll() {
		return exerciseDao.findAll();
	}

	// 内容を保存
	public void insert(String adminName, String adminEmail, String password) {
		exerciseDao.save(new ExerciseEntity(adminName, adminEmail, password));
	}

	// 内容をupdate
	public void update(Long adminId, String adminName, String adminEmail, String password) {
		exerciseDao.save(new ExerciseEntity(adminId, adminName, adminEmail, password));
	}

	// 削除
	public void delete(Long adminId) {
		exerciseDao.deleteById(adminId);
	}

	public ExerciseEntity selectByAdminId(Long adminId) {
		return exerciseDao.findByAdminId(adminId);

	}

}
