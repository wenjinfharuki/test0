package exercise.example.model;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExerciseDao extends JpaRepository<ExerciseEntity, Long> {

	// データの内容を保存
	ExerciseEntity save(ExerciseEntity exerciseEntity);

	// 一覧取得
	List<ExerciseEntity> findAll();

	// idを見つける
	ExerciseEntity findByAdminId(Long adminId);
}
