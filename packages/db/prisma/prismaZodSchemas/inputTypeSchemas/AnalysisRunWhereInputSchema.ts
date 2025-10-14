import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumAnalysisStatusFilterSchema } from './EnumAnalysisStatusFilterSchema';
import { AnalysisStatusSchema } from './AnalysisStatusSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DocumentScalarRelationFilterSchema } from './DocumentScalarRelationFilterSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const AnalysisRunWhereInputSchema: z.ZodType<Prisma.AnalysisRunWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AnalysisRunWhereInputSchema), z.lazy(() => AnalysisRunWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AnalysisRunWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AnalysisRunWhereInputSchema), z.lazy(() => AnalysisRunWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumAnalysisStatusFilterSchema), z.lazy(() => AnalysisStatusSchema) ]).optional(),
  engineVersion: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  startedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  finishedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  overallRisk: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  document: z.union([ z.lazy(() => DocumentScalarRelationFilterSchema), z.lazy(() => DocumentWhereInputSchema) ]).optional(),
});

export default AnalysisRunWhereInputSchema;
