import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumSeverityFilterSchema } from './EnumSeverityFilterSchema';
import { SeveritySchema } from './SeveritySchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';

export const ClauseAnalysisScalarWhereInputSchema: z.ZodType<Prisma.ClauseAnalysisScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ClauseAnalysisScalarWhereInputSchema), z.lazy(() => ClauseAnalysisScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ClauseAnalysisScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ClauseAnalysisScalarWhereInputSchema), z.lazy(() => ClauseAnalysisScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  runId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  clauseId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  severity: z.union([ z.lazy(() => EnumSeverityFilterSchema), z.lazy(() => SeveritySchema) ]).optional(),
  riskScore: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  triggerWarnings: z.lazy(() => StringNullableListFilterSchema).optional(),
});

export default ClauseAnalysisScalarWhereInputSchema;
