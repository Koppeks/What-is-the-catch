import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionCreateWithoutDocumentInputSchema } from './SectionCreateWithoutDocumentInputSchema';
import { SectionUncheckedCreateWithoutDocumentInputSchema } from './SectionUncheckedCreateWithoutDocumentInputSchema';
import { SectionCreateOrConnectWithoutDocumentInputSchema } from './SectionCreateOrConnectWithoutDocumentInputSchema';
import { SectionUpsertWithWhereUniqueWithoutDocumentInputSchema } from './SectionUpsertWithWhereUniqueWithoutDocumentInputSchema';
import { SectionCreateManyDocumentInputEnvelopeSchema } from './SectionCreateManyDocumentInputEnvelopeSchema';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';
import { SectionUpdateWithWhereUniqueWithoutDocumentInputSchema } from './SectionUpdateWithWhereUniqueWithoutDocumentInputSchema';
import { SectionUpdateManyWithWhereWithoutDocumentInputSchema } from './SectionUpdateManyWithWhereWithoutDocumentInputSchema';
import { SectionScalarWhereInputSchema } from './SectionScalarWhereInputSchema';

export const SectionUpdateManyWithoutDocumentNestedInputSchema: z.ZodType<Prisma.SectionUpdateManyWithoutDocumentNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => SectionCreateWithoutDocumentInputSchema), z.lazy(() => SectionCreateWithoutDocumentInputSchema).array(), z.lazy(() => SectionUncheckedCreateWithoutDocumentInputSchema), z.lazy(() => SectionUncheckedCreateWithoutDocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SectionCreateOrConnectWithoutDocumentInputSchema), z.lazy(() => SectionCreateOrConnectWithoutDocumentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SectionUpsertWithWhereUniqueWithoutDocumentInputSchema), z.lazy(() => SectionUpsertWithWhereUniqueWithoutDocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SectionCreateManyDocumentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SectionWhereUniqueInputSchema), z.lazy(() => SectionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SectionWhereUniqueInputSchema), z.lazy(() => SectionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SectionWhereUniqueInputSchema), z.lazy(() => SectionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SectionWhereUniqueInputSchema), z.lazy(() => SectionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SectionUpdateWithWhereUniqueWithoutDocumentInputSchema), z.lazy(() => SectionUpdateWithWhereUniqueWithoutDocumentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SectionUpdateManyWithWhereWithoutDocumentInputSchema), z.lazy(() => SectionUpdateManyWithWhereWithoutDocumentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SectionScalarWhereInputSchema), z.lazy(() => SectionScalarWhereInputSchema).array() ]).optional(),
});

export default SectionUpdateManyWithoutDocumentNestedInputSchema;
