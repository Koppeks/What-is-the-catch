import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionCreateWithoutDocumentInputSchema } from './SectionCreateWithoutDocumentInputSchema';
import { SectionUncheckedCreateWithoutDocumentInputSchema } from './SectionUncheckedCreateWithoutDocumentInputSchema';
import { SectionCreateOrConnectWithoutDocumentInputSchema } from './SectionCreateOrConnectWithoutDocumentInputSchema';
import { SectionCreateManyDocumentInputEnvelopeSchema } from './SectionCreateManyDocumentInputEnvelopeSchema';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';

export const SectionCreateNestedManyWithoutDocumentInputSchema: z.ZodType<Prisma.SectionCreateNestedManyWithoutDocumentInput> = z.strictObject({
  create: z.union([ z.lazy(() => SectionCreateWithoutDocumentInputSchema), z.lazy(() => SectionCreateWithoutDocumentInputSchema).array(), z.lazy(() => SectionUncheckedCreateWithoutDocumentInputSchema), z.lazy(() => SectionUncheckedCreateWithoutDocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SectionCreateOrConnectWithoutDocumentInputSchema), z.lazy(() => SectionCreateOrConnectWithoutDocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SectionCreateManyDocumentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SectionWhereUniqueInputSchema), z.lazy(() => SectionWhereUniqueInputSchema).array() ]).optional(),
});

export default SectionCreateNestedManyWithoutDocumentInputSchema;
