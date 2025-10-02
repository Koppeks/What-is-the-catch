import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRunWhereUniqueInputSchema } from './AnalysisRunWhereUniqueInputSchema';
import { AnalysisRunUpdateWithoutDocumentInputSchema } from './AnalysisRunUpdateWithoutDocumentInputSchema';
import { AnalysisRunUncheckedUpdateWithoutDocumentInputSchema } from './AnalysisRunUncheckedUpdateWithoutDocumentInputSchema';
import { AnalysisRunCreateWithoutDocumentInputSchema } from './AnalysisRunCreateWithoutDocumentInputSchema';
import { AnalysisRunUncheckedCreateWithoutDocumentInputSchema } from './AnalysisRunUncheckedCreateWithoutDocumentInputSchema';

export const AnalysisRunUpsertWithWhereUniqueWithoutDocumentInputSchema: z.ZodType<Prisma.AnalysisRunUpsertWithWhereUniqueWithoutDocumentInput> = z.strictObject({
  where: z.lazy(() => AnalysisRunWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AnalysisRunUpdateWithoutDocumentInputSchema), z.lazy(() => AnalysisRunUncheckedUpdateWithoutDocumentInputSchema) ]),
  create: z.union([ z.lazy(() => AnalysisRunCreateWithoutDocumentInputSchema), z.lazy(() => AnalysisRunUncheckedCreateWithoutDocumentInputSchema) ]),
});

export default AnalysisRunUpsertWithWhereUniqueWithoutDocumentInputSchema;
