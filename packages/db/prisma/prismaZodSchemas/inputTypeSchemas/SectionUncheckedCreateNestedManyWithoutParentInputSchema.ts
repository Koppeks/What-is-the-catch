import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionCreateWithoutParentInputSchema } from './SectionCreateWithoutParentInputSchema';
import { SectionUncheckedCreateWithoutParentInputSchema } from './SectionUncheckedCreateWithoutParentInputSchema';
import { SectionCreateOrConnectWithoutParentInputSchema } from './SectionCreateOrConnectWithoutParentInputSchema';
import { SectionCreateManyParentInputEnvelopeSchema } from './SectionCreateManyParentInputEnvelopeSchema';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';

export const SectionUncheckedCreateNestedManyWithoutParentInputSchema: z.ZodType<Prisma.SectionUncheckedCreateNestedManyWithoutParentInput> = z.strictObject({
  create: z.union([ z.lazy(() => SectionCreateWithoutParentInputSchema), z.lazy(() => SectionCreateWithoutParentInputSchema).array(), z.lazy(() => SectionUncheckedCreateWithoutParentInputSchema), z.lazy(() => SectionUncheckedCreateWithoutParentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SectionCreateOrConnectWithoutParentInputSchema), z.lazy(() => SectionCreateOrConnectWithoutParentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SectionCreateManyParentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SectionWhereUniqueInputSchema), z.lazy(() => SectionWhereUniqueInputSchema).array() ]).optional(),
});

export default SectionUncheckedCreateNestedManyWithoutParentInputSchema;
