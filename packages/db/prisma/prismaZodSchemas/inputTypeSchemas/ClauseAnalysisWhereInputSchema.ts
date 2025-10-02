import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumSeverityFilterSchema } from './EnumSeverityFilterSchema';
import { SeveritySchema } from './SeveritySchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { AnalysisRunScalarRelationFilterSchema } from './AnalysisRunScalarRelationFilterSchema';
import { AnalysisRunWhereInputSchema } from './AnalysisRunWhereInputSchema';
import { ClauseScalarRelationFilterSchema } from './ClauseScalarRelationFilterSchema';
import { ClauseWhereInputSchema } from './ClauseWhereInputSchema';
import { CategoryHitListRelationFilterSchema } from './CategoryHitListRelationFilterSchema';

export const ClauseAnalysisWhereInputSchema: z.ZodType<Prisma.ClauseAnalysisWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ClauseAnalysisWhereInputSchema), z.lazy(() => ClauseAnalysisWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClauseAnalysisWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClauseAnalysisWhereInputSchema), z.lazy(() => ClauseAnalysisWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  runId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  clauseId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  severity: z.union([ z.lazy(() => EnumSeverityFilterSchema), z.lazy(() => SeveritySchema) ]).optional(),
  riskScore: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  triggerWarnings: z.lazy(() => StringNullableListFilterSchema).optional(),
  run: z.union([ z.lazy(() => AnalysisRunScalarRelationFilterSchema), z.lazy(() => AnalysisRunWhereInputSchema) ]).optional(),
  clause: z.union([ z.lazy(() => ClauseScalarRelationFilterSchema), z.lazy(() => ClauseWhereInputSchema) ]).optional(),
  categoryHits: z.lazy(() => CategoryHitListRelationFilterSchema).optional(),
});

export default ClauseAnalysisWhereInputSchema;
