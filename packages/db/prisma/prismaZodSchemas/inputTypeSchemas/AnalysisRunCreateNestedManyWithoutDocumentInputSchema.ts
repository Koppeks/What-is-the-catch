import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRunCreateWithoutDocumentInputSchema } from './AnalysisRunCreateWithoutDocumentInputSchema';
import { AnalysisRunUncheckedCreateWithoutDocumentInputSchema } from './AnalysisRunUncheckedCreateWithoutDocumentInputSchema';
import { AnalysisRunCreateOrConnectWithoutDocumentInputSchema } from './AnalysisRunCreateOrConnectWithoutDocumentInputSchema';
import { AnalysisRunCreateManyDocumentInputEnvelopeSchema } from './AnalysisRunCreateManyDocumentInputEnvelopeSchema';
import { AnalysisRunWhereUniqueInputSchema } from './AnalysisRunWhereUniqueInputSchema';

export const AnalysisRunCreateNestedManyWithoutDocumentInputSchema: z.ZodType<Prisma.AnalysisRunCreateNestedManyWithoutDocumentInput> = z.object({
  create: z.union([ z.lazy(() => AnalysisRunCreateWithoutDocumentInputSchema),z.lazy(() => AnalysisRunCreateWithoutDocumentInputSchema).array(),z.lazy(() => AnalysisRunUncheckedCreateWithoutDocumentInputSchema),z.lazy(() => AnalysisRunUncheckedCreateWithoutDocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AnalysisRunCreateOrConnectWithoutDocumentInputSchema),z.lazy(() => AnalysisRunCreateOrConnectWithoutDocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AnalysisRunCreateManyDocumentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AnalysisRunWhereUniqueInputSchema),z.lazy(() => AnalysisRunWhereUniqueInputSchema).array() ]).optional(),
}).strict() as z.ZodType<Prisma.AnalysisRunCreateNestedManyWithoutDocumentInput>;

export default AnalysisRunCreateNestedManyWithoutDocumentInputSchema;
