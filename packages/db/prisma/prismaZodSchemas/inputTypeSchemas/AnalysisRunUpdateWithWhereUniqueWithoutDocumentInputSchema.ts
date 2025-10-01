import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRunWhereUniqueInputSchema } from './AnalysisRunWhereUniqueInputSchema';
import { AnalysisRunUpdateWithoutDocumentInputSchema } from './AnalysisRunUpdateWithoutDocumentInputSchema';
import { AnalysisRunUncheckedUpdateWithoutDocumentInputSchema } from './AnalysisRunUncheckedUpdateWithoutDocumentInputSchema';

export const AnalysisRunUpdateWithWhereUniqueWithoutDocumentInputSchema: z.ZodType<Prisma.AnalysisRunUpdateWithWhereUniqueWithoutDocumentInput> = z.object({
  where: z.lazy(() => AnalysisRunWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AnalysisRunUpdateWithoutDocumentInputSchema),z.lazy(() => AnalysisRunUncheckedUpdateWithoutDocumentInputSchema) ]),
}).strict() as z.ZodType<Prisma.AnalysisRunUpdateWithWhereUniqueWithoutDocumentInput>;

export default AnalysisRunUpdateWithWhereUniqueWithoutDocumentInputSchema;
