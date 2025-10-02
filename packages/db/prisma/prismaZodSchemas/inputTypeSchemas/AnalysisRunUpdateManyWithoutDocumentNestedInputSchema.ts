import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AnalysisRunCreateWithoutDocumentInputSchema } from './AnalysisRunCreateWithoutDocumentInputSchema';
import { AnalysisRunUncheckedCreateWithoutDocumentInputSchema } from './AnalysisRunUncheckedCreateWithoutDocumentInputSchema';
import { AnalysisRunCreateOrConnectWithoutDocumentInputSchema } from './AnalysisRunCreateOrConnectWithoutDocumentInputSchema';
import { AnalysisRunUpsertWithWhereUniqueWithoutDocumentInputSchema } from './AnalysisRunUpsertWithWhereUniqueWithoutDocumentInputSchema';
import { AnalysisRunCreateManyDocumentInputEnvelopeSchema } from './AnalysisRunCreateManyDocumentInputEnvelopeSchema';
import { AnalysisRunWhereUniqueInputSchema } from './AnalysisRunWhereUniqueInputSchema';
import { AnalysisRunUpdateWithWhereUniqueWithoutDocumentInputSchema } from './AnalysisRunUpdateWithWhereUniqueWithoutDocumentInputSchema';
import { AnalysisRunUpdateManyWithWhereWithoutDocumentInputSchema } from './AnalysisRunUpdateManyWithWhereWithoutDocumentInputSchema';
import { AnalysisRunScalarWhereInputSchema } from './AnalysisRunScalarWhereInputSchema';

export const AnalysisRunUpdateManyWithoutDocumentNestedInputSchema: z.ZodType<Prisma.AnalysisRunUpdateManyWithoutDocumentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => AnalysisRunCreateWithoutDocumentInputSchema), z.lazy(() => AnalysisRunCreateWithoutDocumentInputSchema).array(), z.lazy(() => AnalysisRunUncheckedCreateWithoutDocumentInputSchema), z.lazy(() => AnalysisRunUncheckedCreateWithoutDocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AnalysisRunCreateOrConnectWithoutDocumentInputSchema), z.lazy(() => AnalysisRunCreateOrConnectWithoutDocumentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AnalysisRunUpsertWithWhereUniqueWithoutDocumentInputSchema), z.lazy(() => AnalysisRunUpsertWithWhereUniqueWithoutDocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AnalysisRunCreateManyDocumentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AnalysisRunWhereUniqueInputSchema), z.lazy(() => AnalysisRunWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AnalysisRunWhereUniqueInputSchema), z.lazy(() => AnalysisRunWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AnalysisRunWhereUniqueInputSchema), z.lazy(() => AnalysisRunWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AnalysisRunWhereUniqueInputSchema), z.lazy(() => AnalysisRunWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AnalysisRunUpdateWithWhereUniqueWithoutDocumentInputSchema), z.lazy(() => AnalysisRunUpdateWithWhereUniqueWithoutDocumentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AnalysisRunUpdateManyWithWhereWithoutDocumentInputSchema), z.lazy(() => AnalysisRunUpdateManyWithWhereWithoutDocumentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AnalysisRunScalarWhereInputSchema), z.lazy(() => AnalysisRunScalarWhereInputSchema).array() ]).optional(),
});

export default AnalysisRunUpdateManyWithoutDocumentNestedInputSchema;
